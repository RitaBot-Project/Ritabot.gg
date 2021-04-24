---
title: "Common Issues"
permalink: /common-issues/
excerpt: "Common Issues with Rita"
last_modified_at: 2021-02-01T14:00:00+01:00   
redirect_from:
  - /errors/
toc: true

---

RITA is not perfect and there are many places to make mistakes while setting up RITA so here is a little guide to aid you in your problem-solving. As always if you require more assistance join our **[Discord Server](https://discord.gg/mgNR64R)** where someone will help you if none of these solve your problem.

*If you are attempting to solve problems with your bot please setup [webhook logs](https://ritabot.gg/troubleshooting) to assist us and yourself in diagnosing the problem's you are experiencing.* 

### Translation stops every 24 hours or so 
*Otherwise known as `embedvalue` error*

* This occurs when you invited the bot to the Discord Server before it was online and the `embedvalue` is not saving correctly.
  * Go to Discord and run these commands in order:
    * `!tr settings dbfix`
    * `!tr settings updatedb`
    * `!tr embed on` or `!tr embed off`

* Once the commands have been sent the bot should not stop translations anymore and shall only send one message every 24 hours regarding the bot restart.
       

### RITA is unresponsive

*Make sure you have [forked](https://github.com/RitaBot-Project/RitaBot/fork) the repository and connected your Github account to Heroku "Deploy" section before proceeding*

* This occurs on the first deploy of the bot, no discernible reason has been found as to why.
  * Go to your [Heroku Page](https://heroku.com/):
    * Go to the "Deploy" section in Heroku and make sure your fork is connected.
    * Scroll down to the "Manual Deploy."
    * Deploy the *master* branch.

* Your bot will now be working once finished deploying and then type in `!tr embed on` or `!tr embed off` (They are two different translation styles!) to finish setting up the bot for translation.
    


### *Bot Restarted* message loop

* This occurs when you have no `embedvalue` in your database, either you have not typed it in/set it or it has not saved correctly.
  * Go to Discord and send the following commands:
    * `!tr settings dbfix`
    * `!tr settings updatedb`
    * `!tr embed on` or `!tr embed off`

* Your bot should now translate and `embedvalue` and/or your server has been entered into your database and correctly saved.


### Server not registered in database

* This appears because your bot entered the server before it was online or operational. 
  * Go to Discord and send the following commands:
    * `!tr settings dbfix`
   
* Your bot has now updated the database to correspond to the servers it is in. Please note that if you had this error you may need to go through the [following entry](https://ritabot.gg/common-issues/#translation-stops-every-24-hours-or-so).




If you require more assistance join our [Discord Server](https://discord.gg/mgNR64R)


