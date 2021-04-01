---
title: "Troubleshooting"
permalink: /troubleshooting/
excerpt: "Troubleshooting Guide."
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

## Troubleshooting
* You can set up debugging Webhooks using the following steps
    1. Create a new channel on your server to receive the Webhooks, let's say `#Webhooks`.
    2. Go to Server Settings -> Webhooks -> Create Webhook. Select the `#Webhooks` channel, then copy the Webhook's URL. It will look something like `https://discordapp.com/api/webhooks/012345678901234567/VCj9yOOtJF9VCm-BU2F9xrbnoWD5gBZZ-UU1mZHcxi5VLgr3bPb9NanRJM8YD9cpBisL`
    3. In the **Settings** tab of your Heroku app add the following Config Variables (values extracted from your URL):
        * **DISCORD_DEBUG_WEBHOOK_ID** : 012345678901234567
        * **DISCORD_DEBUG_WEBHOOK_TOKEN** : VCj9yOOtJF9VCm-BU2F9xrbnoWD5gBZZ-UU1mZHcxi5VLgr3bPb9NanRJM8YD9cpBisL
    4. Restart your app's `worker node src/bot.js` dyno, and you will begin to receive debugging messages in your `#Webhooks` channel.
* If your bot in unresponsive, the first thing to check is Heroku. Log in and manually restart the `worker node src/bot.js` dyno.
* For further troubleshooting, it's helpful to install the Heroku command line interface. Once installed you can login from a terminal with `heroku login` and check your apps logs with `heroku logs --tail -a <your-app-name>`
* If you are unable to solve a problem yourself, report it with as much detail as possible in this repo's issue tracker.

