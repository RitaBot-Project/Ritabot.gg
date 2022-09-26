---
description: 01/04/2022 - Update on the state of RITA 1.3.0 Public Release.
layout: landing
---

# RITA UPDATE

{% hint style="info" %}
If you have any other Questions join our [**Discord Server**](https://discord.gg/mgNR64R) **** and we will try and answer them.
{% endhint %}

### **First things first**

Since the beginning of February RITA’s public version has been offline, this was due to a series of events outside of our control. Starting with a DDOS attack and then a series of direct Takedown requests targeted at RITA because of a petty feud. For the most part, this has been resolved.

The RITA Dev team at this point knew that we had to make some changes, so we started to look at viable and feasible options for RITA to continue to run.

We looked at Free APIs, sourcing the cost from somewhere else, limiting usage and a few other wacky ideas. Unfortunately, these all fell by the wayside and the only viable option we identified was a paid model for the official Google API. More about this later.

Since then we have been working on how this would work and what it will look like, and I will be honest, we don’t have all the answers yet, but we want to let you know what is happening.

### **Why is it taking so long?**

As most of you are already aware, the DEV team consists of 4 to 8 Main members of staff, each of these members of staff also have real-world jobs and families. Unfortunately one of the core coding team has recently changed jobs and it has taken 3-ish weeks to settle into a new work pattern, while others have faced personal family matters limiting their availability. Others are students and the rest have families, with needy husbands, wives and kids. (Why would you even have kids?). This has meant that there have only been 3 weeks when all the staff had some free time, and decisions needed to be made that can't be done unilaterally. We have been slow at progression.

Some LEGALITIES need to be taken into account, deciding where RITA will be hosted, what country to register a company in if we do. Who is responsible for taxes and so much more. Luckily we have a member of the team able to do some of these but we still need legal consultation.

### What happens next?

As of now, we have an agreed way forward. However, the finer details still need to be worked out. RITA will be going to a paid model, this is set in stone. This is the only way we can keep RITA running and legal.&#x20;

### How much will RITA cost?&#x20;

At this time we don't have a solid answer, but we are in the ballpark of $3-7 a month. We are aiming for $5 as long as there are no unexpected costs or restrictions to contend with.&#x20;

### Can I purchase a lifetime subscription?&#x20;

No Lifetime subscriptions are not offered as the API that we have to pay for requires monthly payments. The likelihood of running into financial instability if everyone had a lifetime sub would be very high. Continuing with a monthly plan has the greatest chance for operational longevity.

### Can I continue to use Self-Hosting?&#x20;

Due to the impending shutdown of all V11 and V12 API, the self-hosting option has reached end-of-life. Once the support goes down, the self-hosting bots will immediately cease to function and there will be nothing we can do.&#x20;

### Can I use a personal API Key using Self-Hosting instead?&#x20;

At this time, we cannot offer that option as the self-hosting option will require a full rewrite to be V13 compatible. As such, ALL self-hosting will be unavailable and unsupported. This may change in the future but not till 2023 at the earliest.&#x20;

### Is the payment per server or per user?&#x20;

The subscription will be a mix of per-user/per-server. Each server you wish to have RITA active in will require you to be the owner of the server (Yes owner not admin) to purchase the subscription. This owner could theoretically use this single license in any server they are the owner of, however, it will only work on 1 server at a time.

### Why is this limited to owners and not admins?&#x20;

The reason for the owner limitation is simple: For you to activate RITA in your server, you will need to do this in the Rita Support Server. By having the owners on the server we can easily identify them, help resolve issues and contact them if there is an issue. In time this will be changed to allow admins but means we need to change the permission structures in the code. It's on the list to do, but to start it will be OWNERS only.&#x20;

### Is there a limit to how many servers we can purchase for?&#x20;

Currently, users are limited to 1 server at this time. More servers will be allowed in the future. Criteria: User must be the SERVER\_OWNER or ADMIN1ADMIN\
Tasks - There will be a global tasks limit for each server, 100 is the current target but this may change. DUser must pay for the subscription themselves as the sub is mapped to their USER ID.&#x20;

### What are our future plans?&#x20;

RITA as it stands is using the Google Cloud API, and is charged, as such we are charged for usage, thus the need for a subscription fee. However, there are other APIs available for use.

The long term goal is to have a paid-for, all features version. All our changes, new features and work will continue on this version.

Like a lot of other discord bots, we want to try and introduce a free limited version, and we are looking at how this can be done, with some of the other APIs that are free, with limited languages and support, reduced accuracy and higher delaying in responses. This is not saying we will reduce the accuracy or reliablilty of these API, its just the nature of API data we will have access too.&#x20;

We are looking at ways we can implement these into a free version. It will be limited and would have limits such as 10 tasks, flags only, etc etc.

This means we can continue to draw in users, while offering all our support and time to paid users, ensuring that we continue development and can keep RITA running for years to come.&#x20;

### When is the Launch?&#x20;

We would like to give you a date, and we wanted it to be live for a soft launch on the 1st of April, but due to the aforementioned issues and limited time, we don’t have a date. We aim to have as much done and have the bot as stable as possible before launch.&#x20;

With a whole bunch of new features added in before February that we were testing for the v1.3.0 release, we did not have the chance to finish this testing and ensure she was working.

The current goal is before the end of April. This is for a few reasons but mainly we want to get her online again.&#x20;

### What support can I expect?&#x20;

The level of support you get at the moment will inevitably change, And we will not turn into a “you don’t pay so you don't matter” support server. All our users are important. Without all of you, we would not be where we are today.

There will be things however that will be managed by a single or maybe two members of staff, such as payment-related issues. This will not be able to be managed by general support staff and will require an Admin. This means there may be an SLA of 24 hours to allow for time zones and real life. More details will be provided on responsibilities and roles close to launch.&#x20;

### How will payments be made?&#x20;

Currently, we are looking at a subscription platform, such as Patreon, to manage our payments and subscriptions. We are looking at all available options and will have the info ready to share before launch.&#x20;

### What Subscription levels will be offered?&#x20;

Currently, we are looking at keeping it simple, with 1 monthly cost.

We recognise this may not work for everyone, and as such are looking at the possibilities of a tiered system. What will be included in these is not finalized, and we are keeping all options open.

### Will there be any limitations?&#x20;

Short answer, **YES**.

We have already talked about the limitation of usage, 1 server per owner. (this will change in the future)

The next limits we have to talk about are:&#x20;

1. If you have more than 100 tasks at launch, ALL tasks will be deleted as we cannot know what ones you want to keep. This only affects about <1% servers)
2. Characters - Unlike other services, we won’t be initially offering a character-based subscription, as our testing indicates this is not needed. BUT it may be an option in the future.
3. DM - Translation to DM will be disabled globally, however, in the future, this will be able to be requested to be enabled for your server, with a valid use case as to why it is needed.
4. Auto - The current implementation of auto-translation works, and we are not removing it. However, it is being used incorrectly, and as such, the command will be changing a little. But it won't impact any existing tasks set up.

### Why is there a Task limit?&#x20;

Again this is simple, if each server had 1000 tasks, and we have 10k servers, that's 10,000,000 (Million) Tasks. Not only is this too many for us to think about but, it would also have a massive impact on reliability and speed.

100 is a fair limit, and since 98% of our current user base has less than 100 it is easy to launch with most of the work done.

### Why is self hosting support ending?&#x20;

There are a few reason why self hosting support is ending.

Currently the self hosting version operates an older version of the RITA Code, as such it constantly needs to be managed, updated and maintained.

This means we need to update the code and ensure it works. This takes time. At the moment we want to dedicate this time to ensuring the paid version is working and online. When we split our attention it has an impact on our ability to help everyone.

This does not mean a member of the community, if they want to, cant offer support to another member of the community. There won't be official Dev/Admin/helper support for self hosting issues.

In the future this may change, but at the moment we can not dedicate our time to supporting self hosting users.

### Final Thoughs, Questions and Concerns.

Our Aim, The RITA Dev team, is to continue to keep RITA running. We aim to be transparent with everything we do and want to keep the community we have built alive.

We understand that this may be a shock to some of you, and may not be something you will understand. We will endeavour to answer any questions and try and alleviate any concerns you may have.

If you have a question we have not answered, please reach out and ask it.

These decisions have been agreed upon by the Core RITA Dev Team. If you have any issues please raise them privately or open a ticket for us to respond.&#x20;

{% hint style="success" %}
If you have any other Questions join our [**Discord Server**](https://discord.gg/mgNR64R) **** and we will try and answer them.
{% endhint %}
