---
title: "Whats new with Rita"
permalink: /whats-new/
excerpt: "Support pages for Rita"
last_modified_at: 2019-09-29T14:00:00+01:00   #Please Update, The +00:00 is the Time Zone difference
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

**Important Note**

*The bot's default prefix is !t (or !translate) - however this can be changed by the user.
Bot must have proper permissions in all relevant channels for full functionality (**read**, **write**, **react**, **mention**, **attachments**, **embed**).*

----
## New in 1.2.1

### Command Changes
* `embed`, `bot2bot`, `settings updatedb` commands have been added
  * `embed`: This command allows you to change the type of message that is sent to the translation channel, in embedded format or standard text. Standard text shows the users avatar and name instead of the bot.
  * `bot2bot`: This allows for messages sent from other bots, in non embedded format to be translated as well. (Due to limitations this has been implimented but is **disabled** for now)
  * `updatedb`: As the new variables above are stored in the DB, they need new Columns to be added to function, as such `updatedb` will complete these actions.
  * `!t settings updatebot` Has been **Modified** - This is not needed as of yet and with the similarities to the `!t settings updatedb` command, it may cause accidental issues.
  
### Code changes
* Major code changes, new code implementations will change the DB and produce errors on first build, but this is a safe version to update to. Follow the below instructions to fix the DB.
  * Step 1: Make a pull request and update from **Master** branch. 
    * Once you update the bot and it initializes you WILL get a DB error, this is normal. (we are working on suppressing these)
  * Step 2: `!t settings updatedb`
    * This will throw another error but it will build the missing columns.
    * The default value for `embed` is **on** and `bot2bot` is **off**.
    * Running this multiple times will cause errors to be posted to webhook channel, this will be a "Value exists" error. This is intended to prevent you from destroying the DB
  * Step 3: Completed, and now working.
    * Once you have completed Step 2, the bot will have come online, but it wont have fully Initialised. 
    * To prevent a never ending loop of errors, the VERY FIRST message or command sent on the first load will Initialise the DB fully. Meaning you will have to send that message again.
      * Please Note Due to [Automatic dyno restarts](https://devcenter.heroku.com/articles/dynos#automatic-dyno-restarts) the first message after each restart will share the same behaviour as above.

### Misc
* Various Security vulnerabilities fixed.
* Dev Dependencies core to this bot, the `google-transalte-api` & `google-transalte-token` & `gulp-watch`have been updated
* `eslint` has been replaced with `babel-eslint`
