---
title: "Misc. Commands"
permalink: /trans-misc/
excerpt: "Miscellaneous Commands"
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

*The bot's default prefix is !t (or !translate) - All commands must start with this prefix for the bot to process them.
Bot must have proper permissions in all relevant channels for full functionality (**read**, **write**, **react**, **mention**, **attachments**, **embed**).*

*Users who wish to receive automatic translations in private must **enable DMs** via **server privacy settings**.*

----

# Help
`!t help `  Give a list of all Help commands  
`!t help [command] ` Give usage info for each command. Example `!t help last` would show how to use the last command.  

# Statistics
`!t stats `  Shows a summary of the Global & Server stats.  
`!t stats global ` Shows a summary of Global stats, all the servers the bot is currently on.  
`!t stats server `  Shows a summary of the Server stats.  
`!t proc `  Shows the processor usage, CPU, Ram and Uptime of the bot.  
`!t shards ` Shows the number of shards the bot is running on.  

# Links
`!t invite` Creates an invite link for the bot so other can use it, i would not recommend using this command.  

# Supported Languages
`!t list` Lists all supported languages the bot can use.  

# Version
`!t version ` Shows the current version of the bot

# Tasks
`!t tasks ` Lists all current translation tasks for the channel the command is used in.  

# Doante
`!t doante oc ` Donation link for open Collective.
`!t doante github ` Donation link for GitHub.