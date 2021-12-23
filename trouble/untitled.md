---
description: Guide on how to setup webhook debugging logs for your RitaBot.
---

# Webhook Logging

To setup debugging webhooks follow the steps below.

1. Create a channel for said webhooks to be sent to (`#translator-webhooks`)
2. Go to `Server Settings -> Webhooks -> Create Webhook` and then select your `#translator-webhooks` channel.
3. Copy your webhooks URL (_discordapp.com/api/webhooks/.../..._)
4. Open the URL and copy the `token` and `id`(webhook id, not channel id)
5. Go to your `Heroku Application Settings -> Reveal Config Vars` and enter in two new KEY's&#x20;
   1. `DISCORD_DEBUG_WEBHOOK_ID` with a value of the webhook ID you copied (01234567890...)
   2. \``DISCORD_DEBUG_WEBHOOK_TOKEN`with a value of the copied webhook token (SAdxaDfASduwG324...)
6. Once done a message should popup in your channel and you are all set



If you require any assistance join our discord server!

