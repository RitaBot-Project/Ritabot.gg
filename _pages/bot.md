---
title: "Heroku Database Support"
permalink: /dbsupport/
excerpt: "Heroku Database Support"
last_modified_at: 2020-09-29T14:00:00+01:00   #Please Update, The +00:00 is the Time Zone difference
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

## Heroku Database Support

Sometimes you need to edit the Database manually, this is not something you should be playing around with unless you really know what you are doing.

### Step 1 - Checklist

1. Know that you are doing, if you don't then **do not** touch the DB. Simple.
2. Download and Install Postgres Admin 4, Located [Here](https://www.pgadmin.org/download/) or [Here](https://www.postgresql.org/ftp/pgadmin/pgadmin4/). *This guide will be for Windows, but it should not be much different for any other OS.*
3. Locate your credentials for you Heroku Database, log in to **Heroku** > Select your **App** > Click **Resources** > Click **Heroku Postgres** > Click **Settings** > Click **View Credentials** (*Note: Heroku rotates credentials periodically and updates applications where this database is attached.*)

### Step 2 - Connect

For a fresh install of pgAdmin, the dashboard likely contains only one server. This is your local server, Ignore this.
1. Right click server(s) > create > server …
2. Fill out the following:
  * **Name:** This is solely for you. Name it whatever you want, I chose ‘Heroku-Run — On’.

*Under the connection tab:*
  * **Hostname/Address:** This is the host credential you located in Step 3. It should look like \*\*-\*\*-\*\*...amazonaws.com
  * **Port:** Keep the port at 5432, unless your credentials list otherwise
  * **Maintenance database:** This is the database field located in Step 3 Below.
  * **Username:**  This is the user field in the credentials.
  * **Password:** The password field located in Step 3. I highly advise checking save password so that you don’t have to copy & paste this every time you want to connect.
  * In the **SSL Tab**, mark SSL mode as require.

### Step 3

At this point, if we were to hit ‘save’ (please don’t), something very strange would happen. You would see hundreds if not thousands of databases appear in pgAdmin. This has to do with how Heroku configures their servers. You will still only have access to your specific database, not those of others. In order to avoid parsing so many databases, we must whitelist only those databases we care about.

1. Go to the **Advanced** tab and under db restriction copy the database name (it is the same value as the **Maintenance Database** field filled earlier).
2. Click Save/Connect and you are done. Edit away.
