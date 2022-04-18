---
layout: landing
---

# Launch To-Do List Mobile

{% hint style="success" %}
If you have any other Questions join our [**Discord Server**](https://discord.gg/mgNR64R) **** and we will try and answer them.
{% endhint %}

V1.3.0 will soon be upon us. Changes can be seen [here](../whats-new/130.md), With these changes, it has taken a long time to get things ready. It has not been an easy journey and we know that you may not understand all the reasons we have done what we have done, we have tried to keep you up-to-date as much as we can, you can read more about some of the issues we have had [here](rita-update.md).&#x20;

Due to some of these changes, the GitHub Repo we used is now private, so you are not able to follow along with all the changes we are making, how we are progressing and what is needed to be done for a release. As such we have included all the things we [need ](launch-to-do-list-mobile.md#core-commands)to do, [want ](launch-to-do-list-mobile.md#other-functions)to do and [plan ](launch-to-do-list-mobile.md#1.3.1-and-beyond)to do below.&#x20;

Please let us know if you have any questions or suggestions and we will be glad to talk to you about them.&#x20;

That's all we have, for now. So keep an eye on this page, as we progress we will check things off and once we have a launch date it will be published below for everyone to see.&#x20;

## LAUNCH DATE

RITA 1.3.0 will be launched on: **TBA**

****

<details>

<summary>Core Commands</summary>

The following command need to be Added and a full round of testing conducted before launch. These are vital to core functionality of RITA and operational status when launch takes place.

*   #### **!tr find \[Server Name/Owner] (Owner ID / Username / Tag)**

    Searching for a server by Variables will allow us to manage user request without having to pull a full server list or refer to DB.
*   #### **!tr sub**&#x20;

    Subscription Command, Variables and Error Catching.
*   #### **!tr check \[ {server/server-user} /channel/user] {server id} (id)**

    This needs to be fully tested and allow for correct checking of Server Channel and Users, both in Local and Target server.

</details>

<details>

<summary>Core Functions</summary>

These Functions are Required to be function for core services. Full testing needs to be completed on all core functions.

* [ ] **Tasks Restrictions**
  * [ ] Limiter - Restriction to 250 Tasks per server
  * [ ] Warning Message - Show warning message when a user attempts to add a task where it will go over 250 task count
* [ ] **Permissiong Structure**
  * [ ] Full check of current permission structure
  * [ ] Change some Owner only commands to Admin
* [ ] **DB Server Name limit Increase (32 Char to 250)**

</details>

<details>

<summary>Other Functions</summary>

These are not mandatory, but are desired. They can be implemented after launch with normal Feature introduction Process.

* [ ] **Profanity Filter**
* [ ] **Thread Support**
* [ ] **Auto Warn/Eject System**
* [ ] **Flag Reaction to users DM**
* [ ] **Developer Identity Check / Restriction in Public & Community Servers**
* [ ] **Delete messages of Banned/Kicked user**
* [ ] **Mass delete translated messages of single user**
* [ ] **Long Split messages order correction**

Commands we want to try and introduce for launch, but may not be fully tested or activated.

* [ ] **!tr ignore \[channel/role/user] (id)**
* [ ] **!tr check \[server/user] (id)**
* [ ] **!tr profanity (delete/remove/hide)**
* [ ] **!tr whitelist/blacklist \[server/user/role] (id)**

</details>

<details>

<summary>Help Commands</summary>

All the following help command responses need to be Updated, Checked, Tested and Published before Launch.

*   #### **!tr help sub**

    New command needs to be created with info about sub process.
*   [ ] **!tr ticket**

    Info on how to raise a support ticket, link to server ticket channel and info about the different support tickets available.
*   [ ] **!tr help auto**

    Update info on HOW TO USE the help auto command, and what it should not be used for.
*   [ ] **!tr help update**

    Remove this command as no longer needed.
* [ ] **!tr help settings**

</details>

<details>

<summary>Discord Server Changes</summary>

*   [ ] **Create Channel for Sub Command**

    Channel will need info about process and step by step guide.

</details>

<details>

<summary>Website</summary>

* [ ] **Website Policy on Refunds / Disputes and FAQ**
  * [ ] Full guide on policy for Subscription, how they are managed and dispute process.&#x20;
  * [ ] FAQ for payment process, refunds and ticket support.

</details>

<details>

<summary>Support Guides</summary>

*   [ ] **Support Guide on Task Limits**

    At the time of launch, this will be 250. However in future this is subject to change. All server with more than 250 tasks currently will unable to create any more tasks, they will be given a grace period of 1 month to reduce the task count to below 250. If this is not done then after 30 days ALL tasks will be removed from the Database for the selected server. Once they are delete they will not be able to be recovered.

<!---->

*   [ ] **Sub Support guide**

    Full support guide on how to Sub, With images and step by step process on how to do it.&#x20;

</details>

<details>

<summary>Roles and Responsibilities</summary>

* [ ] Guidelines for Community Helpers
* [ ] Guidelines for Bot Helpers
* [ ] Community Guidelines & Ticket expectations
* [ ] Core Team Guidelines, Roles and responsabilities

</details>

<details>

<summary>Testing</summary>

Full Test of all Core Functions, Commands, Restriction and Translation Functions, across multiple servers.

Full Testing guide can not be released at this time, But will be in the future. As functions expand and new with new releases, the test guide will be expanded upon, and will be shown with version updates. This will allow us to ensure that users are aware of what stage we are in the release process and an estimated ETA.

</details>

<details>

<summary>1.3.1 &#x26; Beyond</summary>

* [ ] **Sharding Manager Revamp**
* [ ] **Dashboard**
* [ ] **Allow Admin to Sub**
* [ ] **Multi API/Translation providers and ability to select**
* [ ] **Ability to Whitelist other bots to allow command to be sent in messages**
* [ ] **Global Spam link detection**
* [ ] **Global Ban List**
* [ ] **Simplified Set-up and Category Set-up Wizard**

</details>



{% hint style="success" %}
If you have any other Questions join our [**Discord Server**](https://discord.gg/mgNR64R) **** and we will try and answer them.
{% endhint %}