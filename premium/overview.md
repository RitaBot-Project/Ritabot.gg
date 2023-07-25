---
description: >-
  Information about subscribing to RitaBot services. Please make sure to read
  the entire page before proceeding with buying a subscription to clear up any
  possible future confusion.
---

# Overview

{% hint style="info" %}
If you need help at any point join our [**Discord Server**](https://discord.gg/mgNR64R) and someone will help you.
{% endhint %}

## About Subscribing

In order to subscribe to RitaBot, _you must be on our_ [_**Discord Server**_](https://discord.gg/mgNR64R)_._  Subscriptions are role-based, meaning that Rita updates subscriptions based on which roles you have been given by the payment platform (which tier you have bought). If you leave the server, Rita will cancel your subscription at the end of a one-month period from the last subscription date, even if your subscription is still active.&#x20;

{% hint style="info" %}
For any queries you may have in regards to subscriptions, please proceed to <mark style="color:blue;">#open-a-ticket</mark> in our [**Discord Server**](https://discord.gg/mgNR64R).
{% endhint %}

## Maintenance and Uptime

There may be times RitaBot ceases to function, in which the procedure for us will be to verify the problem and fix it as soon as possible. We are not responsible for any issues this may cause.&#x20;

Furthermore, there may be times of maintenance in order to improve and exceed Rita's capabilities.\
\
In line with our [Refund Policy](../policys/refund-policy.md), We aim for a service uptime of >80% (24 Days in a rolling 30-day period) of core functionality.

## Servers

Currently, **only the server owner or admin** can buy a subscription for a server. Furthermore, _**only one server can be activated with your subscription at a time**_. This _will be liable to change in the future as time goes on_.

## How to Activate?

To activate your subscription after you have paired your Discord Account to your payment, you must run the **`!tr sub`** command in the <mark style="color:blue;">#activate-rita-here</mark> channel in our [Discord Server](https://discord.gg/mgNR64R), after you do so follow the prompts to activate your subscription for the specific server.

{% hint style="danger" %}
In order to subscribe and maintain said subscription, you MUST be on our [**Discord Server**](https://discord.gg/mgNR64R)**.** If you cannot or are not, your subscription will be canceled at the end of a 1-month period from the last verification date (the last 1-month period from the subscription start where the subscription was confirmed).
{% endhint %}

## Soft Limit&#x20;

In order to provide a virtually "unlimited" pricing model, we've incorporated soft limits into Rita. Essentially, each tier has **X** amount of chars per month that will be translated with Google. Meanwhile, **all other translations** will use our own Neural Machine Translation server.

#### Quality

* While we are working hard to make our own translations as seemingless as ever, Google translations will be similar/better than ML translations simply due to Google's resources
  * We are working to provide clarifying examples of quality for language pairs to be as clear as possible

#### Limits

* To clarify; all tiers are still unlimited character wise.
  * The only difference shall be if you've used more than the soft limit for your tier in a month, then all other translations will use our ML until month is reset.

## What do I get with each plan?

The only difference between our plans at the moment, and for the foreseeable future is the task limit that you are restricted to. If this changes however we will let you know, You won't lose access to anything you don't already have.&#x20;

<table><thead><tr><th width="150">Function / Command</th><th width="150">Casual</th><th width="150">Tinkerer</th><th>Pro</th></tr></thead><tbody><tr><td>Task Limit</td><td>100</td><td>200</td><td>350</td></tr><tr><td>Soft Limit (characters)</td><td>~200k Google</td><td>~450k Google</td><td>~700k Google<br></td></tr><tr><td>Character Limit (backed by ML)</td><td>Unlimited</td><td>Unlimited</td><td>Unlimited</td></tr></tbody></table>

## What is a task?

A task is a singular channel setup for automatic channel translation. Tasks are simply the setup, not the usage. For example; 1 channel translating from English to French counts as a task. As you add more languages to an interconnected language setup, the task utilization increases exponentially.&#x20;

You can calculate how many tasks you use for each channel by using the amount of languages (including source) you want to have for that channel in the equation **x \* (x-1)**&#x20;

* Reaction translation, utilisation of tasks, or anything else do not count towards task count
  * Only the `group` , `auto` , and `channel` commands contribute to task count

####
