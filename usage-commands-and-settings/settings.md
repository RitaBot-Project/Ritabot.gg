# Settings - Bot Owner Commands

## Settings - Bot Owner Commands <a href="#page-title" id="page-title"></a>

**Important Note**

_The bot’s default prefix is !tr (or !translate) - All commands must start with this prefix for the bot to process them. Bot must have proper permissions in all relevant channels for full functionality (**read**, **write**, **react**, **mention**, **attachments**, **embed**)._

_Users who wish to receive automatic translations in private must **enable DMs** via **server privacy settings**._

**These commands are available only to admins.**

## Current-server-settings

This command will display a printout of your current server settings.

```
 * !tr settings
```

## Set custom Bot Prefix

This command will allow you to set a custom prefix for RITA in your server.

```
  * !tr prefix [prefix]
  * !translate prefix [prefix]
```

## Developer Announcement Messages

This command will turn off messages from the Development team.

```
 * !tr announce [on/off]
```

## Embedded Message Style

This command will allow you to use either embed or webhook translation Styles.

```
  * !tr embed [on/off]
  * !tr help embed
```

This is embed style: This is webhook style:

![](<../.gitbook/assets/image (3) (1).png>) ![](<../.gitbook/assets/image (1) (1).png>)

## Language Detection

This command will add a source Language marker to the translated text.

```
* !tr settings langdetect [on/off]
```

![](<../.gitbook/assets/image (2) (1).png>)

## Bot to Bot Translation Status

This command will allow RITA to translate messages from most bots

```
  * !tr bot2bot [on/off]
  * !tr help bot2bot
```

## Tags(everyone, here and user)

This command will allow you to disable RITAs ability to use the everyone, here and user tags when using Webhook translation style.

```
  * !tr settings tags [Parameter]
```

#### Parameters

```
 * none - RITA won't ignore any mentions
 * everyone - RITA will ignore everyone and here tags
 * all - RITA will ignore all mentions
```

## Reaction Translations

This command will turn off the ability to translate a message with Country flags.

```
  * !tr react [on/off]
```

## Auto Deletion Commands

These commands are to enable/disable various auto delete functions.

```
  * !tr settings menupersist [on/off]
  * !tr settings reactpersist [on/off]
  * !tr settings flagpersist [on/off]
```

## Webhook Debug Active State

This command will allow you to turn on debugging for RITA related errors in your server.

```
  * !tr debug [on/off]
  * !tr help debug
```

## Reset All Settings

This command will reset all Settings to their default setting.

```
  * !tr settings reset
```

{% hint style="info" %}
**Important Note**

_The bot’s default prefix is !tr (or !translate) - All commands must start with this prefix for the bot to process them. Bot must have proper permissions in all relevant channels for full functionality (**read**, **write**, **react**, **mention**, **attachments**, **embed**)._

_Users who wish to receive automatic translations in private must **enable DMs** via **server privacy settings**._
{% endhint %}
