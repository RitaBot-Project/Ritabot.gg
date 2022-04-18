---
description: THis page walks you through how to update to the latest version of Ritabot.
---

# How to update

{% hint style="danger" %}
### All development and support of the self-hosted version has now been discontinued
{% endhint %}

{% hint style="info" %}
**NOTICE**: In April of 2022 the code in this repo will be deprecated and we will no longer offer support for it. For updated info on the future of the Ritabot-Project be sure to follow the **ANNOUNCEMENTS** channel in our Discord Server.
{% endhint %}

#### Step 1 - Checklist <a href="#step-1---checklist" id="step-1---checklist"></a>

* You must have a bot already running on your server, if not then refer to [Setting up a New Bot Manually](https://ritabot.gg/new-bot/)

#### Step 2 - Fork this Repository <a href="#step-2---fork-this-repository" id="step-2---fork-this-repository"></a>

* Complete a Pull Request from the master Branch of RitaBot-Project/RITA to your master branch
  * Detailed instructions with example can be found here: https://www.sitepoint.com/quick-tip-sync-your-fork-with-the-original-without-the-cli/

— OR —

* Simply Fork this repository if you have not done so already, or if you are updateing from the “Deploy to Heroku” method.
  * Click [here](https://github.com/RitaBot-Project/RitaBot/fork) or use the button in the upper righthand side of this page to fork the repository so that it will be associated with your Github account.

#### Step 3 - Deploy Update in Heroku <a href="#step-3---deploy-update-in-heroku" id="step-3---deploy-update-in-heroku"></a>

* Log in to your Heroku account.
* Select the bot you made in step 3 of [Setting up a New Bot](https://ritabot.gg/update/#new-bot)
* Under **Deployment Method** Scroll down to the manual deploy section, and select the **Master** branch. Click deploy branch, and wait for the successfully deployed message.

#### Step 4 - Updating Database <a href="#step-4---updating-database" id="step-4---updating-database"></a>

* You will need to run three commands for your database to be updated to the new versions needs. Your bot shall not function until all of these have been run.
* Please run the following commands in consecutive order:
  * **`!tr settings updatedb`**
  * **`!tr settings dbfix`**
  * **`!tr embed on/off`** (you can decide which way to send messages and change this value at any time).
