---
title: "Translate - Last Message"
permalink: /trans-last/
excerpt: "Translate the Last Message/s"
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

Translates last message chain(s) in channel.  
A chain is a collection of messages by the same author, to keep things simple.

# Commands
```c++
> !tr last
> !tr last [n] to [lang] from [lang]
```  

# Parameters
* `to [lang]` - defaults to server default language  

* `to [lang, lang, ...]` - translates to multiple languages  

* `from [lang]` - defaults to automatic detection  

* `[n]` - number of chains to translate, default is 1  

* `[-n]` - negative number means only one chain is translated  

# Examples
```c++
> !tr last 2
> !tr last to english  
> !tr last to english, german, french
> !tr last -6 to english from german
```
