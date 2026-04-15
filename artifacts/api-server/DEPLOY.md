# RitaBot API Server — VPS / Coolify Deployment Guide

## Overview

The API server is a Node.js Express application that proxies translation requests to Google Translate, DeepL, and the RitaBot ML engine. It bundles into a single file (`dist/index.mjs`) using esbuild.

---

## 1. Environment Variables

Set these on your VPS or in Coolify's environment settings:

| Variable         | Required | Description                                      |
|------------------|----------|--------------------------------------------------|
| `PORT`           | Yes      | Port the server listens on (e.g. `3000`)         |
| `NODE_ENV`       | Yes      | Set to `production`                              |
| `GOOGLE_API_KEY` | Yes      | Google Cloud Translation API key                 |
| `DEEPL_API_KEY`  | Yes      | DeepL API key (paid plan, uses `api.deepl.com`)  |
| `ML_SERVER`      | Yes      | ML translation server URL (e.g. `https://translate.ritabot.gg`) |
| `ML_API_KEY`     | Yes      | API key for the ML translation server            |
| `LOG_LEVEL`      | No       | Logging level (default: `info`)                  |

---

## 2. Option A: Build and Run Directly on VPS

### Prerequisites
- Node.js 20+
- pnpm 10+ (or npm)

### Steps

```bash
# Clone the repo
git clone https://github.com/AcousticRicky/rita-bot-home.git
cd rita-bot-home

# Install dependencies
pnpm install

# Build the API server (creates dist/index.mjs)
cd artifacts/api-server
pnpm run build

# Run in production
NODE_ENV=production PORT=3000 \
  GOOGLE_API_KEY="your-google-key" \
  DEEPL_API_KEY="your-deepl-key" \
  ML_SERVER="https://translate.ritabot.gg" \
  ML_API_KEY="your-ml-key" \
  node --enable-source-maps ./dist/index.mjs
```

### Run with systemd (recommended)

Create `/etc/systemd/system/ritabot-api.service`:

```ini
[Unit]
Description=RitaBot API Server
After=network.target

[Service]
Type=simple
User=ritabot
WorkingDirectory=/opt/ritabot-api/artifacts/api-server
ExecStart=/usr/bin/node --enable-source-maps ./dist/index.mjs
Restart=always
RestartSec=5
EnvironmentFile=/opt/ritabot-api/.env

[Install]
WantedBy=multi-user.target
```

Create `/opt/ritabot-api/.env`:

```env
PORT=3000
NODE_ENV=production
GOOGLE_API_KEY=your-google-key
DEEPL_API_KEY=your-deepl-key
ML_SERVER=https://translate.ritabot.gg
ML_API_KEY=your-ml-key
```

Then enable and start:

```bash
sudo systemctl enable ritabot-api
sudo systemctl start ritabot-api
sudo systemctl status ritabot-api
```

---

## 3. Option B: Deploy with Docker / Coolify

### Dockerfile

Create this at `artifacts/api-server/Dockerfile`:

```dockerfile
FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app

# Copy workspace root files needed for pnpm install
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY artifacts/api-server/package.json artifacts/api-server/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy API server source
COPY artifacts/api-server/ artifacts/api-server/

# Build
WORKDIR /app/artifacts/api-server
RUN pnpm run build

# --- Production stage ---
FROM node:20-alpine

WORKDIR /app

# Copy only the built output
COPY --from=builder /app/artifacts/api-server/dist ./dist

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "--enable-source-maps", "./dist/index.mjs"]
```

### Build and run locally with Docker

```bash
# From the repo root
docker build -f artifacts/api-server/Dockerfile -t ritabot-api .

docker run -d --name ritabot-api \
  -p 3000:3000 \
  -e PORT=3000 \
  -e NODE_ENV=production \
  -e GOOGLE_API_KEY="your-google-key" \
  -e DEEPL_API_KEY="your-deepl-key" \
  -e ML_SERVER="https://translate.ritabot.gg" \
  -e ML_API_KEY="your-ml-key" \
  ritabot-api
```

### Coolify Setup

1. **Add new resource** → select **Docker** (or **Nixpacks** if preferred)
2. **Connect your GitHub repo**: `AcousticRicky/rita-bot-home`
3. **Build settings**:
   - **Build Pack**: Dockerfile
   - **Dockerfile Location**: `artifacts/api-server/Dockerfile`
   - **Docker Build Context**: `.` (repo root — important, not `artifacts/api-server`)
4. **Environment Variables** → add all variables from the table above
5. **Network**:
   - **Exposed Port**: `3000`
   - Set up your domain (e.g. `api.ritabot.gg`) with HTTPS
6. **Health Check** (optional):
   - **Path**: `/api/healthz`
   - **Port**: `3000`
7. **Deploy**

---

## 4. Verify Deployment

```bash
# Health check — should show version and engine status
curl https://your-api-domain.com/api/healthz

# Test Google Translate
curl -X POST https://your-api-domain.com/api/translate/google \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello","source":"en","target":"de"}'

# Test DeepL
curl -X POST https://your-api-domain.com/api/translate/deepl \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello","source":"EN","target":"DE"}'

# Test ML Engine
curl -X POST https://your-api-domain.com/api/translate/ml \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello","source":"en","target":"de"}'
```

Expected health check response:

```json
{
  "status": "ok",
  "version": "2.1.1",
  "engines": {
    "google": "connected",
    "ml": "connected",
    "deepl": "connected"
  }
}
```

---

## 5. Update Frontend API URL

Once deployed, update `VITE_API_BASE_URL` in your GitHub Actions workflow (`.github/workflows/deploy.yml`) to point to your new API domain:

```yaml
env:
  VITE_API_BASE_URL: https://api.ritabot.gg
```

---

## 6. CORS

The server allows requests from:
- `https://ritabot.gg`
- `https://www.ritabot.gg`
- Any `*.replit.dev` domain (for development)
- `localhost` (for local testing)

If you host the frontend on a different domain, update the `cors()` origins in `src/app.ts`.

---

## API Endpoints

| Method | Path                    | Description              |
|--------|-------------------------|--------------------------|
| GET    | `/api/healthz`          | Health check + status    |
| POST   | `/api/translate/google` | Google Translate proxy   |
| POST   | `/api/translate/deepl`  | DeepL proxy              |
| POST   | `/api/translate/ml`     | ML Engine proxy          |

All POST endpoints accept:
```json
{
  "text": "Hello world",
  "source": "en",
  "target": "de"
}
```

Rate limit: 10 requests per minute per IP.
Max text length: 200 characters.
