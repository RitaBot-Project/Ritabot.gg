# Channel Translation

_Automatically translates any new messages in the current channel and forwards them to the target channel. Admins/mods can set forwarding to the same channel(not recommended) or other channels(recommended)._

_Please note that when you setup an auto command the target channel will not send back to main channel unless you tell it to_

{% hint style="info" %}
Feel free to join our Discord Server for any concerns you may have, we’re here to help. [![invite](https://img.shields.io/badge/Discord\_Support-JOIN-7289DA.svg?)](https://discordapp.com/invite/mgNR64R)
{% endhint %}

## Command <a href="#command" id="command"></a>

**`!tr channel from [lang] to [lang] for # [dest]`**

**`!tr auto to [lang] for # [same channel dest]`**

### Parameters

* for **`[dest]`** The target channel you want the translation of the from **`[lang]`** to go to.
* to **`[lang]`** _(optional)_\
  &#x20;The language to translate to, defaults to server default language if none provided.
* from **`[lang]`**\
  &#x20;The language to translate from.
* NOTE : Auto is for a single ( same channel ) translations, as photos, and Gifs, will not be duplicated or sent.

## Examples <a href="#examples" id="examples"></a>

Using full language names

**`!tr channel from english to spanish for #target-channel`**

**`!tr auto to spanish for #current-channel`**

Using language short codes

**`!tr channel from en to es for #target-channel`**

**`!tr auto to es for #current-channel`**

![English to Spanish, translating to the Spanish Channel](../.gitbook/assets/IMG\_20211222\_230640.jpg)

![Translating all supported languages to Spanish in the #general-en channel ( same channel ) Not Recommended for more than 3 languages](../.gitbook/assets/IMG\_20211222\_230849.jpg)

Using Auto detection

**`!tr auto to ru for #current-channel`**

### Server Admins/Mods <a href="#server-adminsmods" id="server-adminsmods"></a>

Send translations to same channel ( Not recommended for more than 3 languages )

**`!tr channel from english to spanish for #current-channel`**

**`!tr auto to spanish for #current-channel`**

Send translations to another channel in server ( Recommended )

**`!tr channel from english to spanish for #target-channel`**

**`!tr channel from english to spanish for #target-channel`**

**`!tr auto to spanish for #current-channel`**

Send translations to multiple channels in the server at once

**`!tr channel from english to spanish for #target-channel-es1, #target-channel-es2, #target-channel-es3, #target-channel-es4`**

**`!tr channel from english to spanish for #target-channel-es1, #target-channel-es2, #target-channel-es3, #target-channel-es4`**

## Stopping Translations <a href="#stopping-translations" id="stopping-translations"></a>

To stop an automatic translation task, simply go the origin channel of the task and use the stop command:

**`!tr stop`**

**`!tr stop task [id!tr stop for [me]`**

**`!tr for [@user]`**

**`!tr stop for [#channel]`**&#x20;

**`!tr stop for [all]`**

**`!tr stop for [server]`**

### Parameters

* **\[id],** ID number for the task you want to stop, run !tr tasks to get id.
* for **\[me]** - Stops translations via DM to yourself.
* for **`[@user]`** - Stops the task for user.
* for **`[channel]`** - Stops the task from the channel posted to the channel destination.
* for **\[all]** - Stops all translations in the channel its posted in.
* for **\[server]** - Stops all translations being done in your server.

## Admins/Mods <a href="#adminsmods" id="adminsmods"></a>

Stop all automatic translations

**`!tr stop task [ID]`**

Stop a single task by running !tr task, and taking note of the ID of the item to remove.

**`!tr stop for [@UserID]`**

Stop a translation being sent to a user.

**`!tr stop for #target-channel`**

Stop all automatic translations for specific channel in server

**`!tr stop for all`**

Stop all automatic translations for the channel.

**`!tr stop for server`**

Stop all tasks in the server.

_Help command for stop: **`!translate help stop`**_

## Notes <a href="#notes" id="notes"></a>

_Help command for automatic translation: **`!translate help auto`**._

* Values wrapped in brackets **`[ ]`** are solely for illustrative purposes to demonstrate the use of the command. Brackets are not in any command.

**`[lang]`** values can be language names in English, native language names or ISO 639-1 codes. For example, **`german`** **`de`** and **`deutsch`** will all work the same.

* Messages by all bots are currently ignored to avoid loops, but we are working on different bot modes to enable bot translation.
  * Any message that begins with **`!tr`** or **`!translate`** will be determined to be a bot command and thus shall not be allowed to be translated.

{% hint style="info" %}
**Important Note**

_The bot’s default prefix is !tr (or !translate) - All commands must start with this prefix for the bot to process them. Bot must have proper permissions in all relevant channels for full functionality (**read**, **write**, **react**, **mention**, **attachments**, **embed**)._

_Users who wish to receive automatic translations in private must **enable DMs** via **server privacy settings**._
{% endhint %}
