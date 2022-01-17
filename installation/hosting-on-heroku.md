---
description: >-
  This tutorial will walk you through the process of hosting your own bot via
  Heroku.
---

# Heroku

## Github

#### Fork this repository <a href="#step-1---fork-this-repository" id="step-1---fork-this-repository"></a>

* **If you don’t yet have a Github account,** [**create one**](https://github.com/join)**! It’s free and easy.**
*   **Click** [**here**](https://github.com/RitaBot-Project/RitaBot/fork) **or click the icon below to fork our project.**

    ***
* **While you’re at it we would greatly appreciate adding a star to our project to promote RITA in Github for others to benefit too. You can do that by clicking the icon below and then clicking the \_Star**\_\*\* image in the top-right corner of the\*\* [**repo**](https://github.com/RitaBot-Project/RitaBot)**.** \*

## Discord

### Create new [Discord App](https://discordapp.com/developers/applications)

* Give your app the name you would like your bot to be then click **Create App**
  * _I like the name **C-3PO**, but feel free to pick something different if you fear George Lucas’s wrath._
* Copy the **CLIENT ID** of your bot, you will need it later
* ![](https://ritabot.gg/assets/images/Client\_ID.png)
* Scroll down to the **Bot** section
* Click the **Create a Bot User** button
* Click the **Yes, do it!** button
* Copy the bot’s **TOKEN**, you will need it later
* ![](https://ritabot.gg/assets/images/Token\_ID.png)
  * **CLIENT ID** will be a string of numbers while your bots **TOKEN** will be a huge mix of letters and numbers.

## Heroku

### Create a [Heroku account](https://signup.heroku.com/login)

_Heroku is a PaAs (platform as a service). They provide hosting services for free so this will be where your bot will be hosted. You can always run your bot locally or on a personal machine (though the hosting device would constantly need to allocate memory and power to the Bot for it to be online), look at_ [_this page_](https://ritabot.gg/local/) _for more assistance_

* Create a new app. It’s name must be unique and composed of all lowercase letters and dashes. Something like `yourname-discordbot` is fine
* Under **Deployment Method** select Github. Connect to your Github account and search for **RitaBot**, once it appears click on it to connect your fork.
* ![](https://ritabot.gg/assets/images/Deploy\_part\_1.png)
* Scroll down to the manual deploy section, and make sure the **master** branch is selected. Click deploy branch, and wait for the successfully deployed message.
* ![](https://ritabot.gg/assets/images/Deploy\_part\_2.png)
* Go to the **Resources** tab and look for the addons section. Search ‘Heroku Postgres’, and add ‘Hobby Dev - Free’ version of Heroku Postgres. This will be automatically attached as your bot’s database. ![](https://ritabot.gg/assets/images/postgres\_1.png)\
  ![](https://ritabot.gg/assets/images/postgres\_2.png)
* Go to the **Settings** tab. Click to reveal Config Variables, then add then add the following: ![](https://ritabot.gg/assets/images/Config\_vars.png)
  * **KEY:** = DISCORD\_TOKEN
  * **Value:** = _Your discord bot’s token that you copied earlier._
  * **KEY:** = NODE\_MODULES\_CACHE
  * **Value:** = false
    * _This is to ensure that when the bot updates it does not use any old Dependencies that Heroku has stored and gets fresh ones from the package.json file_
* Go to the **Overview** tab and click configure dynos. Turn off the default `web npm start` dyno and turn on the `worker node src/bot.js` dyno. Your bot will now be up and running!
  * Make sure to do this or your bot shall crash!
  * ![](https://ritabot.gg/assets/images/Dynos.png)

## Invite Bot

### Invite your bot to your server and configure it!

* Replace the **CLIENTID** string in the following URL with your own apps client id from Step 2
  * https://discordapp.com/oauth2/authorize?\&client\_id=**CLIENTID**\&scope=bot\&permissions=8
* Visit the resulting URL and add your bot to any server where you have admin privileges.

## **Redeploy**

#### Redeploy your bot <a href="#step-5---redeploy-your-bot" id="step-5---redeploy-your-bot"></a>

* Go back to [Heroku](https://heroku.com) and go to the “Deploy” Section of your Heroku Application. Scroll down to ‘Manual Deploy’ and click deploy for the **master** branch. Once deployed type in the chat `!tr help` and then `!tr embed on` or `!tr embed off`. Then translate away ;)
