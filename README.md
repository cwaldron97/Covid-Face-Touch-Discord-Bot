# Covid-Face-Touch-Discord-Bot

## User Instructions
You will need to pull down and install the Covid-Face-Touch repo as well if you want to run the model in the background. Current implementation does not persistently send messages to desired discord server you have invited it to but that can be accomplished using a webhook.

After pulling down the repo run `npm i -s` to install and download all the associated dependencies for `discord.js`. 

You will need a `.env` file with:
```
BOT_TOKEN=DISCORD_TOKEN
```

You will need to get a discord bot token by accessing this website: `https://discord.com/developers/applications` and registering for an application. Remember to not push your discord token anywhere, otherwise they will reset your token and you will need to access it again.

Once you have the bot started you can use the command `!tcount help` to get a list of user commands.

You will need to snag a bot link from the developers portal from above to add it to a server of your choice. There are quite a few guides online stating how to interact and run a bot I recommend checking out a medium article. 

