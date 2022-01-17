# Custom Message

## Translate - Custom Message <a href="#page-title" id="page-title"></a>

**Important Note**

_The bot’s default prefix is !tr (or !translate) - All commands must start with this prefix for the bot to process them. Bot must have proper permissions in all relevant channels for full functionality (**read**, **write**, **react**, **mention**, **attachments**, **embed**)._

_Users who wish to receive automatic translations in private must **enable DMs** via **server privacy settings**._

## Command <a href="#command" id="command"></a>

```
> !tr this: [msg] - Translates to default server language  
> !tr this to [lang]: [msg] - detects language and translates to your to langugae
```

## Parameters <a href="#parameters" id="parameters"></a>

* to **`[lang]`** - Defaults to server default language
* to **`[lang, lang, ...]`** - Translates to multiple languages
* from **`[lang]`** - Defaults to automatic detection

## Examples <a href="#examples" id="examples"></a>

```
> !tr this: bonjour  
> !tr this to spanish: hello world  
> !tr this to arabic, hebrew: I love you  
> !tr this to de from en: how are you?
```

{% hint style="info" %}
**Important Note**

_The bot’s default prefix is !tr (or !translate) - All commands must start with this prefix for the bot to process them. Bot must have proper permissions in all relevant channels for full functionality (**read**, **write**, **react**, **mention**, **attachments**, **embed**)._

_Users who wish to receive automatic translations in private must **enable DMs** via **server privacy settings**._
{% endhint %}
