---
title: "Setting up a Bot with Deploy to Heroku."
permalink: /deploy/
excerpt: "Setting up a Bot with Deploy to Heroku."
last_modified_at: 2020-09-29T14:00:00+01:00   #Please Update, The +00:00 is the Time Zone difference
redirect_from:
  - /theme-setup/
toc: true

# Date formatting & Date Parsing - Let formatting and parsing date expressed in ISO8601 format.
# Can be obtained from https://dencode.com/en/date
# ---- Defined ----
# YYYY-MM-DD'T'hh:mm:ssTZD (e.g. 2015-12-11T20:28:30+01:00)
# YYYY = four-digit year
# MM = two-digit month (01=January, etc.)
# DD = two-digit day of month (01 through 31)
# hh = two digits of hour (00 through 23) (am/pm NOT allowed)
# mm = two digits of minute (00 through 59)
# ss = two digits of second (00 through 59)
# TZD = time zone designator (Z or +hh:mm or -hh:mm)
---
RITA is an automatic translation bot built using `discord.js` and `Google Translate API`.

This Method does not need you to Fork this repository, you can run your bot straight off the RITA Master Branch. For update instructions click [here](/update/)

## Deploy to Heroku.

### Step 1 - Create a new [Discord App](https://discordapp.com/developers/applications/me/create)

* Give app a friendly name and click the **Create App** button
  * I like the name **C-3PO**, but feel free to pick something different if you fear George Lucas's wrath. Maybe **C-4PO**
* Take note of the app **CLIENT ID**, you will need it later.
* Scroll down to the **Bot** section.
* Click the **Create a Bot User** button
* Click the **Yes, do it!** button.
* Copy the bot's **TOKEN**, you will need it later.

### Step 2 - Deploy to Heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/RitaBot-Project/RitaBot)

* In the custom variable of **DISCORD_TOKEN** put in the copied token of your created bot.
* **DO NOT CHANGE** the **NODE_MODULES_CACHE** Variable unless you know about Heroku Caching.
* If you wish to use Webhook Debug logging:
  * Fill in **DISCORD_DEBUG_WEBHOOK_ID** & **DISCORD_DEBUG_WEBHOOK_TOKEN**, For instructions go [here](#troubleshooting)
* Once installed, go to the **Overview** tab and click configure dynos. Turn off the default `web npm start` dyno and turn on the `worker node src/bot.js` dyno. Your bot will now be up and running!

### Step 3 - Invite your bot to your server and configure it!

* Replace the CLIENTID string in the following URL with your own apps client id from Step 2: https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=8
* Visit the resulting URL and add your bot to any server where you have admin privileges.
* Once added, your bot should show up more or less instantaneously. Type `!tr help` within the discord chat for more details on how to use it. Happy translating!

