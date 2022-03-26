---
description: >-
  This tutorial will walk you through the process of hosting your own bot via
  Heroku. Please read carefully and thoughtfully before proceeding. It is
  suggested to follow these instructions on a desktop.
---

# Heroku

### All development and support of the self-hosted version has now been discontinued

!!**NOTICE**: In April of 2022 the code in this repo will be deprecated and we will no longer offer support for it!! For updated info on the future of the Ritabot-Project be sure to follow the **ANNOUNCEMENTS** channel in our Discord Server: [https://discord.com/invite/v62WNej](https://discord.com/invite/v62WNej)

## 1. Github

#### __[_Fork this repository_](https://github.com/RitaBot-Project/RitaBot/fork) by clicking the hyperlink <a href="#step-1---fork-this-repository" id="step-1---fork-this-repository"></a>

* **If you don’t yet have a Github account,** [**create one**](https://github.com/join)**! It’s free and easy.**
  *   **Click** [**here**](https://github.com/RitaBot-Project/RitaBot/fork) **or click the icon below to fork our project.**

      ***

      While you’re at it we would greatly appreciate adding a star to our project to promote RITA in Github. You can do that by clicking the link below and clicking the **Star** icon in the top-right corner of the [repo](https://github.com/RitaBot-Project/RitaBot).&#x20;

## 2. Discord

### Create a new [_Discord Application_](https://discord.com/developers/applications) __&#x20;

* Give your app the name you would like your bot to be then click '**Create App'**
  * _I like the name C-3PO, but feel free to pick something different if you fear George Lucas’s wrath._
* Enter the **Bot** page using the side-menu

![](<../.gitbook/assets/image (10).png>)

* Click the '**Create a Bot User'** button and finalize using the '**Yes, do it!'** button

![](<../.gitbook/assets/image (4).png>)

* Copy the bot **TOKEN,** this is used to login to the bot and is required

![Example of what a bot token will look like](<../.gitbook/assets/image (12).png>)

****

## 3. Heroku

### Create a [_Heroku account_](https://signup.heroku.com/login)__

_Heroku is a PaAs (platform as a service). They provide hosting services for free so this will be where your bot will be hosted. You can always run your bot locally or on a personal machine (though the hosting device would constantly need to allocate memory and power to the Bot for it to be online), look at_ [_this page_](https://ritabot.gg/local/) _for more assistance_

* Create a new app. It’s name must be unique and composed of all lowercase letters and dashes. Something like `yourname-discordbot` is fine



* Under '**Deployment Method'** select Github. Connect to your Github account and search for '**RitaBot'**, once it appears click on it to connect your fork.

![](<../.gitbook/assets/image (7).png>)

* Scroll down to the manual deploy section, and make sure the **master** branch is selected. Click deploy branch, and wait for the successfully deployed message.

![](<../.gitbook/assets/image (8).png>)

* Go to the **Resources** tab and look for the addons section. Search ‘Heroku Postgres’, and add ‘Hobby Dev - Free’ version of Heroku Postgres. This will be automatically attached as your bot’s database.&#x20;

\


![](<../.gitbook/assets/image (11).png>)

* Go to the **Settings** tab. Click to reveal Config Variables, then add then add the following:&#x20;
  * **KEY:** = DISCORD\_TOKEN
  * **Value:** = _<mark style="color:blue;">Your bots copied discord token</mark>_
  * **KEY:** = NODE\_MODULES\_CACHE
  * **Value:** = false
    * _This is to ensure that when the bot updates it does not use any old Dependencies that Heroku has stored and gets fresh ones from the package.json file_

![This is what your config vars should look like in settings](<../.gitbook/assets/image (6).png>)

*   Go to the '**Overview'** tab and click configure dynos. Turn off the default `web npm start` dyno and turn on the `worker node src/bot.js` dyno. Your bot will now be up and running!

    * Make sure to do this or your bot shall crash!



![](<../.gitbook/assets/image (9).png>)



## Step 3. Invite your RitaBot

### Invite your bot to your server and configure it!

* Go to your [_Discord Bot Dashboard_](https://discord.com/developers/applications) again and click your bot
* Copy the '**Application ID'** and [_go to this link_](https://discordapi.com/permissions.html#412854250504)

![Found in General Information Page](<../.gitbook/assets/image (1).png>)

* Paste the copied Application ID into the '**Client ID**' box, and finally, click the link below it to invite your bot&#x20;

![Visit the resulting link and you shall be able to add her to any server you have admin privileges](<../.gitbook/assets/image (2).png>)

****

## **Step 4. Redeploy**

#### Redeploy your bot <a href="#step-5---redeploy-your-bot" id="step-5---redeploy-your-bot"></a>

* Go back to [_Heroku_ ](https://dashboard.heroku.com)and go to the “**Deploy**” Section of your Heroku Application.&#x20;
* Scroll down to ‘**Manual Deploy**’ and click deploy for the '**master'** branch. Once deployed type in the chat `!tr help` and translate away
