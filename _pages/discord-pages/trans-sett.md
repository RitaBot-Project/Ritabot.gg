---
title: "Settings - Bot Owner Commands"
permalink: /trans-sett/
excerpt: "Commands for Bot Owners"
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

*The bot's default prefix is !tr (or !translate) - All commands must start with this prefix for the bot to process them.
Bot must have proper permissions in all relevant channels for full functionality (**read**, **write**, **react**, **mention**, **attachments**, **embed**).*

*Users who wish to receive automatic translations in private must **enable DMs** via **server privacy settings**.*

----

**These commands are available only to admins.**

# Set default server language
This changes the default Language of the server.
```c++
> !tr settings setLang to [lang]
```

# Disconnect bot from server
**DO NOT USE** unless you really need to.
```c++
> !tr settings disconnect
```
