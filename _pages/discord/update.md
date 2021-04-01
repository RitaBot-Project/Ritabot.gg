---
title: "How to Update to 1.1.7 and Above"
permalink: /update/
excerpt: "How to Update."
last_modified_at: 2020-09-08T14:00:00+01:00   #Please Update, The +00:00 is the Time Zone difference
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

## How to Update to 1.1.7 and Above
### Step 1 - Checklist
* You must have a bot already running on your server, if not then refer to [Setting up a New Bot Manually](/new-bot/)

### Step 2 - Fork this Repository 
* Complete a Pull Request from the master Branch of ZyC0R3/Rita to your master branch
  * Detailed instructions with example can be found here: https://www.sitepoint.com/quick-tip-sync-your-fork-with-the-original-without-the-cli/

--- OR ---
* Simply Fork this repository if you have not done so already, or if you are updateing from the "Deploy to Heroku" method.
  * Click [here](https://github.com/ZyC0R3/RitaBot/fork) or use the button in the upper righthand side of this page to fork the repository so that it will be associated with your Github account.

### Step 3 - Deploy Update in Heroku
* Log in to your Heroku account.
* Select the bot you made in step 3 of [Setting up a New Bot](#new-bot)
* Under **Deployment Method** Scroll down to the manual deploy section, and select the **Master** branch. Click deploy branch, and wait for the successfully deployed message.

### Step 4 - Updating Database

* You will need to run three commands for your database to be updated to the new versions needs. Your bot shall not function until all of these have been run.
* Please run the following commands in consecutive order: 
  * **`!t settings updatedb`**
  * **`!t settings dbfix`**
  * **`!t embed on/off`** (you can decide which way to send messages and change this value at any time).