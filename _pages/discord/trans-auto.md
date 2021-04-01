---
title: "Discord Channel Translation "
permalink: /trans-auto/
excerpt: "Discord Channel Translation using Rita. Translate messages and forward their translations to other channels to allow different language channels between users."
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

* The bot's default prefix is `!t` or `!translate` - All commands must start with this prefix for the bot to process them.

* Please also note that the brackets \[ ] are not intended to be in commands. They are only there for illustrative purposes to help you understand how to send a command. If you put a bracket in a command it will not work.

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

*Automatically translates any new messages in the current channel and forwards them to the target channel. Admins/mods can set forwarding to the same channel(not recommended) or other channels(recommended).*

  *Please note that when you setup an auto command the target channel will not send back to main channel unless you tell it to*

# Command
```c++
!translate channel from [lang] to [lang] for [dest]
```

# Parameters
* for **`[dest]`**
The target channel you want the translation of the from **`[lang]`** to go to.  

* to **`[lang]`** _(optional)_  
The language to translate to, defaults to server default language if none provided.

* from **`[lang]`**  
The language to translate from.

# Examples  
Using full language names
```c++
> !t channel from english to spanish for #target-channel
```

Using language short codes
```c++
> !translate channel from en to es for #target-channel
```


## Server Admins/Mods
Send translations to same channel (not recommended)
```c++
> !translate channel from english to spanish for #current-channel
```

Send translations to another channel in server (recommended)
```c++
> !translate channel from english to spanish for #target-channel
```

Send translations to multiple channels in the server at once
```c++
> !translate channel from english to spanish for #target-channel-es1, #target-channel-es2, #target-channel-es3, #target-channel-es2
```

Send translations to channels in other servers the bot is in

 * You need to copy the CHANNEL_ID of the target channel in the other server 
```c++
> !translate channel from english to russian for <#CHANNEL_ID>
```

## Stopping Translations
To stop an automatic translation task, simply go the origin channel of the task and use the stop command:
```c++
> !translate stop  
> !translate stop for [destination]
```

* for **`[destination]`** 
The destination, otherwise known as the target channel to stop the translation to.

## Admins/Mods
Stop all automatic translations
```c++
> !translate stop for all
```

Stop all automatic translations for specific channel in server
```c++
> !translate stop for #target-channel
```

Stop all automatic translations for specific user in server
```c++
> !translate stop for [@UserMention]
```

*Help command for stop: `!translate help stop`*

## Notes
*Help command for automatic translation: `!translate help auto`.*

* Values wrapped in brackets **`[ ]`** are solely for illustrative purposes to demonstrate the use of the command. Brackets are not in any command.

**`[lang]`** values can be language names in English, native language names or ISO 639-1 codes. For example, **`german`** **`de`** and **`deutsch`** will all work the same.

* Messages by all bots are currently ignored to avoid loops, but we are working on different bot modes to enable bot translation.
    * Any message that begins with `!t` or `!translate` will be determined to be a bot command and thus shall not be allowed to be translated.  

**If you have a community of many languages it would be suggested to create language roles and only give those roles access to view their language channels, blocking @everyone from viewing but allowing @Language Role to view, to tidy up the server and stop users from receiving notifications from languages they dont speak.**
