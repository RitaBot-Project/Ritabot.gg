---
description: 'Last updated: April 22, 2022'
---

# S.A.L.T.S Policy

S.A.L.T.S Stands for Subscription, Activation, Limitations, Termination and Suspension Policy. This describes Our policies and procedures on how each of the aforementioned processes are handled.&#x20;

By using the Service, You agree to the following processes and be subject to enforcement of them.&#x20;

## Interpretation and Definitions

The words of which the initial letter is capitalized have meanings defined under Interpretations and Definitions, they are located [Here](policys/interpretation-and-definitions.md).&#x20;

## Subscription

A User subscription follows the below flows. These are different for each subscription platform.

#### Activation Process

Refer to activation steps below in Activation Section.

#### Payment & Renewal Dates

Subscriptions are renewed on different days depending on the platform.

1. Ko-Fi
   1. Renews monthly from the date subscribed. E.g., subscription is purchased and payment is taken on the 09th of May. On the 9th of June payment is taken again, then again on the 9th July. This continues monthly until cancelation.
2. Patreon
   1. Renews monthly on the 1st of each month regardless of subscription date. E.g., subscription is purchased and payment is taken on the 09th of May. On the 1st of June payment is taken, then again on the 1st July. This continues monthly until cancelation.

#### Subscription Tier and Cost

| <p> </p><p>Plan Name</p><p> </p>              | Cost                          | <p> </p><p>Availability</p><p> </p>        | Other Details                                 |
| --------------------------------------------- | ----------------------------- | ------------------------------------------ | --------------------------------------------- |
| <p> </p><p>The OG "Casual" Plan</p><p> </p>   | <p> </p><p>$5.99</p><p> </p>  | <p> </p><p>01/05/22 - 31/05/22</p><p> </p> | Plan Discontinued, Existing Users remain.     |
| <p> </p><p>The "Casual" Plan</p><p> </p>      | <p> </p><p>$6.99</p><p> </p>  | <p> </p><p>01/06/22 - Current</p><p> </p>  | Replacement Tier to \[The OG "Casual" Plan]   |
| <p> </p><p>The OG "Tinkerer" Plan</p><p> </p> | <p> </p><p>$9.99</p><p> </p>  | <p> </p><p>01/05/22 - 31/05/22</p><p> </p> | Plan Discontinued, Existing Users remain.     |
| <p> </p><p>The "Tinkerer" Plan</p><p> </p>    | <p> </p><p>$10.99</p><p> </p> | <p> </p><p>01/06/22 - Current</p><p> </p>  | Replacement Tier to \[The OG "Tinkerer" Plan] |
| <p> </p><p>The OG "Pro" Plan</p><p> </p>      | <p> </p><p>$14.99</p><p> </p> | <p> </p><p>01/05/22 - 31/05/22</p><p> </p> | Plan Discontinued, Existing Users remain.     |
| <p> </p><p>The "Pro" Plan</p><p> </p>         | <p> </p><p>$15.99</p><p> </p> | <p> </p><p>01/06/22 - Current</p><p> </p>  | Replacement Tier to \[The OG "Pro" Plan]      |

#### Tier Cost Changes & Availability

* Once a User has purchased a subscription, the cost they pay will not change, unless they cancel the subscription and then re-subscribe.
  * Cancelation due to failed payment resulting in cancelation of a archived or expired plan cannot be re-activated, regardless of reason.
* No notice will be given on archiving of a plan or removing availability; however, We believe in an open dialect with our customers. That said, business reason depending, We will provide information in the form of an announcement when possible.

#### Other Limitation(s)

All Plans/Tiers are subject to other limitations, detailed below.

## Activation

1. User Invites RITA to server >
2. User Joins RMS Server >
3. User selects relevant plan provided by Ko-Fi/Patreon >
4. User completes payment via platform
   1. Ko-Fi > PayPal or Stripe
   2. Patreon > Payment is handled by Patreon
5. Upon Confirmation of payment User activates Discord integration through account linking.
   1. Guide for [Ko-Fi](premium/how-to-subscribe/method-1.md)
   2. Guide for [Patreon](premium/how-to-subscribe/patreon.md)
6. Integration uses the Ko-Fi and Patreon Bot to apply relevant roles to User, a Role from Payment, Tier, and the Subscription section below are needed for RITA to work.
7. RITA detects role additions and adds relevant and required data to our Subscription Database
8. Once User has all identifying Roles they are able to see the channel #activate-rita-here.
   1. If role addition fails or is incomplete, then it is investigated by the ADMIN team. The ADMIN team will manually validate payment completion and then apply correct roles, if necessary.
9. User types \`!tr sub\` in the above noted channel or in their own server. If they own more than one server or are admin in more than one server, then they are prompted to select the server they want to use RITA in.
   1. RITA must be in the server before the command is run, else an error will be provided.
10. RITA is activated and the subscription process is completed.

## Limitations

Content Here

## Termination

The Termination Process is used in conjunction with the Suspension Process and follows a pre-defined path.

{% hint style="danger" %}
AT NO POINT IN THIS PROCESS IS THE END USER ELIGIBLE FOR A REFUND. THIS PROCESS IS ONLY EXECUTED IN THE MOST SERIOUS OF CIRCUMSTANCES.
{% endhint %}

The Termination flow can only executed/started by the following RMS staff levels and is governed by a strict time frame.

* Owners
* Admins
* Developers

<details>

<summary>Step 1: Contact with User is attempted by RMS staff.</summary>

Attempted contact must be made for process to start. Time line starts once receipt of contact is confirmed. Contact can be via Direct Message from RITA, Tagged/Pinged in RMS, DM from a member of staff or notice provided on the User’s server by RITA or Member of staff.

**If User has not made contact within 24 hours move on to Step 2.**

</details>

<details>

<summary>Step 2: Service is Suspended.</summary>

RITA Translation and Command service is PAUSED, as defined in Suspension Process.

A Further Notice/Contact Attempt is sent to User. This can be via a Direct Message from RITA, Tagged/Pinged in RMS, DM from a member of staff or notice provided on the User’s server by RITA or Member of staff.

**User has not made contact within 48 hours move on to Step 3.**

</details>

<details>

<summary>Step 3: RITA is Ejected</summary>

As a security measure RITA is able to Self-Eject from a server at any time. This function is executed. This results in no loss of data on the server.

A Further Notice/Contact Attempt is sent to User via a Direct Message from RITA, Tagged/Pinged in RMS, DM from a member of staff or notice provided on the User’s server by RITA or Member of staff.

**User has not made contact within 72 hours move on to Step 4.**

</details>

<details>

<summary>Step 4: Server is Blacklisted</summary>

Server ID is Blacklisted. If User attempts to add RITA back to a server that is blacklisted, RITA will kick herself from the server.

NO Further Notice/Contact Attempt to User is made at this point

**User has not made contact within 24 hours move on to Step 5.**

</details>

<details>

<summary>Step 5: NO FURTHER CONTACT</summary>

No further contact to User will be attempted or made. Matter is classified as closed and no further support will be provided

</details>

## Suspension

1. A Suspension of Service can be implemented for a varying number of reasons. This is refer to as Pausing.
2. Pausing and resuming of service can only be conducted by the following RMS staff levels
   1. RITA
   2. Owners
   3. Admins
   4. Developers
   5. Senior Staff
3. Service can be Paused under the following conditions
   1. Detection of suspicious activity.
      1. We cannot share what this look like to prevent anti-detection methods
   2. Exceeding Character Limits of Tier (\*When Implemented)
      1. This could be Google API Limits or ML Limits
4. Suspicion that RITA is being used for SPAM or JUNK flooding
5. Request to Terminate by third party agencyies or companies in line with our Privacy Policy and ToS.
6. Identification that RITA is being used for Commercial use exceeding fair and reasonable use. This is not defined and will be reviewed on a case by case basis. This does not exclude the use of RITA from commercial use.

{% hint style="info" %}
If Service is Paused, We are not able to offer pro rata refunds for the time the service is paused, inactive or non-operational. This is in line with our Refund Policy.
{% endhint %}
