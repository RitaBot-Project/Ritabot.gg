---
title: "Security, The Proof is in the Pudding"
permalink: /secure/
excerpt: "Build Logs and Security Reports"
last_modified_at: 2019-09-10T14:00:00+01:00   #Please Update, The +00:00 is the Time Zone difference
redirect_from:
  - /theme-setup/
toc: true

# Date formatting & Date Parsing - Let formatting and parsing date expressed in ISO8601 format.
# Can be obtained from https://dencode.com/en/date
# ---- Defined ----
# YYYY-MM-DD'T'hh:mm:ssTZD (e.g. 2015-12-11T20:28:30+01:00)
# YYYY = four-digit year
# MM = two-digit month (01=January, etc.)
# DD = two-digit day of month (01 through 31)
# hh = two digits of hour (00 through 23) (am/pm NOT allowed)
# mm = two digits of minute (00 through 59)
# ss = two digits of second (00 through 59)
# TZD = time zone designator (Z or +hh:mm or -hh:mm)
---

## RITA ![GitHub package.json version](https://img.shields.io/github/package-json/v/RitaBot-Project/RitaBot?label=Stable%20Version) [![invite](https://img.shields.io/badge/Discord_Support-JOIN-7289DA.svg?)](https://discordapp.com/invite/mgNR64R) ![GitHub](https://img.shields.io/github/license/RitaBot-Project/RitaBot.svg) 
A Translation bot built using `discord.js` and a custom `Google Translate API`.

*(The NPM Version of Google Translate API is outdated and does not work with this distribution, as such a custom and maintained version is installed.)* 

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/RitaBot-Project/RitaBot)

*NEW:* One Click Build with Heroku, For instructions Please go [here](/deploy/).

### RITA Master Branch
![GitHub package.json version](https://img.shields.io/github/package-json/v/RitaBot-Project/RitaBot?label=Stable%20Version)
![Node.js CI](https://github.com/RitaBot-Project/RitaBot/workflows/Node.js%20CI/badge.svg?branch=master)
![CodeQL](https://github.com/RitaBot-Project/RitaBot/workflows/CodeQL/badge.svg?branch=master)
[![codebeat badge](https://codebeat.co/badges/125a5ce4-4ba1-45cf-95fa-266e1353c331)](https://codebeat.co/projects/github-com-RitaBot-Project-ritabot-master)
![GitHub last commit](https://img.shields.io/github/last-commit/RitaBot-Project/RitaBot.svg)

### Google Translate API Master Branch
![GitHub package.json version](https://img.shields.io/github/package-json/v/RitaBot-Project/google-translate-api?label=Stable%20Version)
[![Build Status](https://travis-ci.com/RitaBot-Project/google-translate-api.svg?branch=master)](https://travis-ci.com/RitaBot-Project/google-translate-api)
![GitHub last commit](https://img.shields.io/github/last-commit/RitaBot-Project/google-translate-api)
![GitHub issues](https://img.shields.io/github/issues/RitaBot-Project/google-translate-api)

### RITA Current Test Branch
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/RitaBot-Project/RitaBot/test-branch?label=Test%20Version)
![Node.js CI](https://github.com/RitaBot-Project/RitaBot/workflows/Node.js%20CI/badge.svg?branch=test-branch)
![CodeQL](https://github.com/RitaBot-Project/RitaBot/workflows/CodeQL/badge.svg?branch=test-branch)
[![codebeat badge](https://codebeat.co/badges/095e56cd-a926-4fa1-91d8-5cb20c11c5c6)](https://codebeat.co/projects/github-com-RitaBot-Project-ritabot-test-branch)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/RitaBot-Project/RitaBot/test-branch)

### RITA Experimental Test Branch (Discord.js V12)
This branch should not be used on any server, most if not all functions are broken as a major update to latest discord.js version is needed.
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/RitaBot-Project/RitaBot/test-branch-1.2.2?label=Experimental%20Version)
[![codebeat badge](https://codebeat.co/badges/b72d7b2b-83d0-47cd-a91f-993964c6c564)](https://codebeat.co/projects/github-com-RitaBot-Project-ritabot-test-branch-1-2-2)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/RitaBot-Project/RitaBot/test-branch-1.2.2)

### Google Translate API Current Test Branch
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/RitaBot-Project/google-translate-api/test-branch?label=Test%20Version)
[![Build Status](https://travis-ci.com/RitaBot-Project/google-translate-api.svg?branch=test-branch)](https://travis-ci.com/RitaBot-Project/google-translate-api)

### Other Information

What some users do not know is that along with the development and maintenance of RITA there are 3 other Repo's that we maintain Vital to the inner working of the bot.

[Google Translate API](https://github.com/RitaBot-Project/google-translate-api) & [Google Translate Token](https://github.com/RitaBot-Project/google-translate-token) These two are vital to the bot working. Without the original creator and everyone who has made it what it is, RITA would not be who she is. This was Cloned at the current stage to prevent changes to the api that might effect the bot, as this is not something that we would be able to know before hand.


[Gulp-watch](https://github.com/RitaBot-Project/gulp-watch) is an amazing repo, but has been neglected for many many moons, so we have cloned this too, keeping it up-to-date and tweeking it for our own use.
