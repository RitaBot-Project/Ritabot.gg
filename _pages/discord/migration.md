---
title: "C3PO to RITA Bot Migration"
permalink: /migration/
excerpt: "C3PO to RITA Bot Migration"
last_modified_at: 2020-05-05T14:00:00+01:00   #Please Update, The +00:00 is the Time Zone difference
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

## C-3PO to RITA Bot Migration (EXPERIMENTAL)
**If you already have a Heroku Bot Using C-3P0**

### Step 1 - Checklist
* Make sure you have completed the following steps before attempting to migrate translation settings.
1. You have an already up and running C-3P0 Bot.
2. You are using Heroku to run the old version.
3. Make sure you do not disable, reset or delete your database (preferably Postgres from Heroku)
4. You have already completed a Pull Request from the master Branch of ZyC0R3/Rita to your master branch.

### Step 2 - Migrate
* Go to Heroku and click your app of C-3PO, and locate the **Deploy** section. Scroll down until you see the current fork your C-3PO bot is running off of, next to it there should be a button saying **Disconnect**
* Next click search on repositories and select your fork of this project and wait for it to load. Once that is completed you need to **Deploy** the 'Master' Branch/Version of the bot.
* Wait for it to finish deploying and you should be good to go. Turn on your worker dyno (if it was not already) and make sure your DISCORD_TOKEN is connected in the variables section in Settings. All data from your previous C-3PO bot should be saved in the database of Postgres as long as you do not delete it and will connect to all the previous channel translation connections. Happy Translating!
