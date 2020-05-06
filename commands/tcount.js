const db = require("../events/db");

module.exports = message => {
    const member = message.mentions.members.first();
    const command = message.content
        if (command.endsWith('total')) {
           return(`There have been a total of X face touches recorded.`);
        }

        if (command.endsWith('profilestats')) {

            if (!member) {
                return message.reply(`Who are you trying to check the count of? You must mention a user.`);
            }
            if (member) {
                return(`The user ${member.user.tag} has X amount of face touches recorded.`);
            }
        }

        if (command.endsWith('ping'))
        {
            return message.channel.send(`c!country US`);
        }

        if (command.endsWith('current'))
        {
            let touchupdate = db.database.ref('total');
            touchupdate.once('value', async function (snapshot) {
               return message.channel.send(`You have touched your face in total, ${snapshot.val()} times.`)

        });
        }
};