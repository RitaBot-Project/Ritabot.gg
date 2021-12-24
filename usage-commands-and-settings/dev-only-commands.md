---
description: These commands are strictly restricted to the developers and Bot owners
---

# Dev only commands

## Dev Commands

* **`!tr announce`** **-** Sends an announcement to the system channel of all servers the bot is currently in.
* **`!tr eject [ServerID]`** **-** Ejects Rita from a designated server.
* **`!tr blacklist [ServerID]` -** Blacklists a designated server from inviting Rita to the server.
* **`!tr unblacklist [ServerID]` -** Unblacklists a designated server, allowing Rita to once again join the server.
* **`!tr warn [ServerID]` -** Sends a warning that suspicious behaviour has been detected coming from a designated server to the system channel of that server.
* **`!tr unwarn [ServerID]`** **-** Sends a message that the suspicious behaviour has been corrected and removes the server from the the warned server list.
* **`!tr check [ServerID]` -** Allows the developers team to check Rita's settings, errors, and permissions to troubleshoot problems.
* **`!tr settings updatedb` -** Updates the Database with all current data
  * no longer required, Rita now does this on her own.
* **`!tr settings listservers` -** Prints a list of all servers that Rita is currently in.
* **`!tr invite server [ServerID]` -** Creates a server invite to the designated Server.
  * This command will only be used if we receive a large number of errors from your server and we are unable to reach you via other means!!
* **!tr settings reset** - Will reset all settings to the default values.
* **!tr stop for server or \[ServerID]** - Will stop all translations tasks server wide.

### **Parameters**

```
* [ServerID] - Raw Server ID
```

### Examples

```
* !tr eject [ServerID] - Eject Rita from [ServerID]
* !tr blacklist [ServerID] - [ServerID] Will be blacklisted
```
