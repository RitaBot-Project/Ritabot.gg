# Last Message

{% hint style="info" %}
Feel free to join our Discord Server for any concerns you may have, we’re here to help. [![invite](https://img.shields.io/badge/Discord\_Support-JOIN-7289DA.svg?)](https://discordapp.com/invite/mgNR64R)
{% endhint %}

{% hint style="warning" %}
**Command is currently disabled pending re-write.**
{% endhint %}

Translates last message chain(s) in channel.\
A chain is a collection of messages by the same author, to keep things simple.

## Commands <a href="#commands" id="commands"></a>

**`!tr last`**

**`!tr last [n] to [lang] from [lang]`**

### Parameters

* `to [lang]` - Defaults to server default language
* `to [lang, lang, ...]` - Translates to multiple languages
* `from [lang]` - Defaults to automatic detection
* `[n]` - Number of chains to translate, default is 1
* `[-n]` - Negative number means only one chain is translated

## Examples <a href="#examples" id="examples"></a>

**`!tr last 2`**

**`!tr last to english`** &#x20;

**`!tr last to english, german, french`**

**`!tr last -6 to english from german`**



{% hint style="info" %}
**Important Note**

_The bot’s default prefix is !tr (or !translate) - All commands must start with this prefix for the bot to process them. Bot must have proper permissions in all relevant channels for full functionality (**read**, **write**, **react**, **mention**, **attachments**, **embed**)._

_Users who wish to receive automatic translations in private must **enable DMs** via **server privacy settings**._
{% endhint %}
