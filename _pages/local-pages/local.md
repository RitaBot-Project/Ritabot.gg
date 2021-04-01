---
title: "Local Installation Support"
permalink: /local/
excerpt: "Local Installation Support"
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

## Local Installation Support
The bot can also be run locally without Heroku. The local setup requires more steps since the database needs to be setup and the development tools need be installed. Start with the steps 1 and 2 in [Setting up a New Bot](#new-bot) and the continue as follows:

### Step 1 - Create a local db
Any Database that runs with SQL Sequelize ('https://sequelize.org/master/') can be used. My recommendation is to use the [SQL Lite](https://www.sqlite.org/index.html) database since the setup is fast and access is easy. Copy the connection details to the database for the next step. Example: The connection to a sqlite database with the name *database.db* stored at the same level of this README file would be *./database.db*.

### Step 2 - Create a new .env File
Copy the existing **.env.example** file and name it **.env**. Edit the Values of **DISCORD_TOKEN**, **DISCORD_BOT_OWNER_ID** and the **DATABASE_URL** according to the values that you copied earlier.

### Step 3 - Install nodejs
Install nodejs from https://nodejs.org/en/  

### Step 4 - Run and start the bot
Run `npm install -g gulp` in your console to install gulp. Build the bot code using `npm build` and run the bot with `npm start`.

### Step 5 - Configure Bot
* Replace the CLIENTID string in the following URL with your own apps client id: https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=8
* Visit the resulting URL and add your bot to any server where you have admin privileges.
* Once added, your bot should show up more or less instantaneously. Type `!t help` within the discord chat for more details on how to use it. Happy translating!
