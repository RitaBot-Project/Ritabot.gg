---
title: "Basic Usage Information."
permalink: /usage/
excerpt: "Basic Usage Info"
last_modified_at: 2019-09-10T14:00:00+01:00   #Please Update, The +00:00 is the Time Zone difference
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

* Your bot must have a set of permissions for it to function correctly. Here are the permissions your bot requires to function:
  * Read Permission
  * Write Permission
  * Embed Permission
  * Attachments Permission
  * Edit Channel Permission
  * Read Permission
  * React Permission
  * Mention Permission
    * The bot requires these sets of permissions to create webhooks for `embed off` translations and to function overall. Without these your bot will not function as it would not be able to translate or send messages without them. 

----

## Prefix and Commands

The bot's default prefix is `!tr`, or `!translate ` - All commands must start with this prefix for the bot to process them.


### Command structure

```c++
[prefix] + [main command] + [parameters]
```

**For Example:**

```c++
!translate help modules
```
```c++
!tr help modules
```
```c++
@Translator help modules
```

### Get help inside Discord

Use this command within any channel the bot has permissions
```c++
!translate help
```

### Requesting features, reporting bugs and more

* Join the [Official RITA Discord Server](https://discord.gg/mgNR64R) to get support 
  * Keep up to date with changes and report bugs, alternatively you can submit your request via a Github [issue tracker](https://github.com/RitaBot-Project/RitaBot/issues). *There is always someone that can help you.*
