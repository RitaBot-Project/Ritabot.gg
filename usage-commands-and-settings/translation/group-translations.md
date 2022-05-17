# Group Translations

_Groups channels using Automatic Channel Translation in a simple, easy-to-manage manner._

{% hint style="info" %}
The group commands are interactive and require you to respond to any prompts correctly to function
{% endhint %}

## Command

* **`!tr group` ** ⬅ **** create new channel group
  * Respond with new group name, number of channels that should be in group, and for each channel prompt respond with channel language and ping which channel to assign
* **`!tr group link [GROUPNAME]` ** ⬅ **** link a new channel into group
  * Respond to prompts by pinging which channel to add and what language to assign to that channel
* **`!tr group unlink [GROUPNAME]` ** ⬅ **** delete a channel from group, opposite of group link
* **`!tr group delete [GROUPNAME]` ** ⬅ **** delete entirety of group
* **`!tr group list` ** ⬅ **** list all groups present in guild

### Parameters

* \[GROUPNAME] refers to the group name you give to the group (can check groups with `!tr group list`)

## Examples



#### Group Creation

![Creating a group connects all the channels you assign to it interchangeably](<../../.gitbook/assets/image (10).png>)

#### Group List

![Lists all groups in server](<../../.gitbook/assets/image (2).png>)

#### Group Link

![Linking a channel links in the channel to all channels in the group](<../../.gitbook/assets/image (13).png>)

#### Group Unlink

![Unlinking a channel does the opposite of linking a channel](<../../.gitbook/assets/image (11).png>)

#### Group Delete

![Deletes all tasks associated with group](<../../.gitbook/assets/image (14).png>)

## Notes

* There is a max of 10 channels/languages per group
* Groups cannot have repeats of languages or channels. All added channels and langs must be unique and not already in the group
* Languages should be in their ISO-639-1 format, list can be found [here](https://cloud.google.com/translate/docs/languages)
