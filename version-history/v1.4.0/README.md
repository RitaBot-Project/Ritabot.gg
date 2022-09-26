---
description: >-
  These changes are not final, and feature may be added and removed before
  launch.
---

# V1.4.0

{% hint style="info" %}
If you need help at any point join our [**Discord Server**](https://discord.gg/mgNR64R) and someone will help you.
{% endhint %}

### Major Changes

* Dependancy Updates
*   Node and NPM Updated

    > * discord.js is now v13.10.3 allowing for RITA use in TiV (Text in Voice) Channels
    > * @discordjs/rest is now v0.5.0, will only be needed for future slashcommands though
    > * removed @discordjs/builders as a higher version of it is an implicit dependency of discord.js anyway
* Reduced amount of Intents, to lower the amount of events reaching RITA and thus improving latency
* Switched from internal sharding (using several Websockets in one process) to traditional sharding (using one process per shard)
* server\_obj only contains the data for the servers on the shard, if other shards data is needed or should be modified broadcastEval will be called to make that shard do the updating/retrieving of data and sending it back
* attached server\_obj to client object as property to have it accessible in broadcastEval code for sharding (and anywhere else without having to import db)
* attached updatedb function to client to have it accessible in broadcastEval sharding code
* moved top.gg Autoposter call to ShardingManager
* Char count of subscribed servers gets reset on subscription renewal now instead of the first of the month
* helpers.js functions getChannel and getMessage as well as the whole resolve.id.js never get used anywhere and are deprecated, as they probably will not work as expected with sharding
* added the possibility to set SUBSCRIPTION\_ROLE\_IDS and TASK\_ROLE in .env file to override the hardcoded ones in config (for testing, BITA, etc.)

### Bug Fixes

* Fixed some spelling errors
* Fixed UserID parsing for channel tasks to DM to support both old <@!...> and new <@...> user mention syntax

### Command Changes

* `!tr shard restart [shardID]` has been added, to restart a single shard only
* `!tr shards` command now prints uptime, latency, amount of guilds, channels and users of the process of each shard instead of the Websockets
* `!tr proc` now shows total uptime of ShardingManager but currently only memory usage of the shard it was called on
* `!tr cache` will show the total amount of cached structures across all shards combined
*   Changed all the following commands to get their data from the correct shard instead of local storage (Some commands are redacted as they are developer only)

    > `!tr object [serverID]`&#x20;
    >
    > `!tr [REDACTED]`&#x20;
    >
    > `!tr stats server [serverID]`&#x20;
    >
    > `!tr announce`&#x20;
    >
    > `!tr purge`&#x20;
    >
    > `!tr settings listusers`&#x20;
    >
    > `!tr settings ownerdb`&#x20;
    >
    > `!tr settings serverdb`&#x20;
    >
    > `!tr settings updatedb`&#x20;
    >
    > `!tr [REDACTED]`&#x20;
    >
    > `!tr [REDACTED]`&#x20;
    >
    > `!tr [REDACTED]`
    >
    > `!tr check [serverID]`&#x20;
    >
    > `!tr [REDACTED]`&#x20;
    >
    > `!tr [REDACTED]`&#x20;
    >
    > `!tr invite [serverID]`&#x20;
    >
    > `!tr [REDACTED]`
    >
    > `!tr [REDACTED]`
* checkSubActive (getting called implicitly on messageCreate)

### Database Changes

* Moved database connection handling to its own file dbInit.js
*   Rewrote definition of database table models as subclasses of Sequelize.Model:

    > dbModels.js as parent class for all \
    > dbServerModel.js \
    > dbStatsModel.js \
    > dbSubscriptionModel.js \
    > dbTasksModel.js

### Misc. Changes

* Help menu updated
* Spelling Mistakes Fixed (Mabey)
* Zycore Broke stuff and the other Devs fixed it
