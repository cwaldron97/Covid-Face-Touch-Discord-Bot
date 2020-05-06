require('dotenv').config()
const fs = require('fs')
const firebase = require('./config')
const Discord = require('discord.js')
const client = new Discord.Client()
require( 'firebase/database' );
const db = require(`./events/db.js`)
const asdf = require(`./events/message.js`)

client.login(process.env.BOT_TOKEN)

fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split('.')[0]
        client.on(eventName, (...args) => eventHandler(client, ...args))
    })
   // let touchupdate = db.database.ref('faceTouch');
   // touchupdate.on('value', async function (snapshot) {
        //new Discord.Message(client, {val:snapshot.val(), content: 'firebasemessage'}, client.channels)
     //   asdf(client, {val: snapshot.val(), content: 'firebasemessage'})
 //       client.once("message", (snapshot) => require(`./events/message.js`)(client, snapshot))
   // });
})









