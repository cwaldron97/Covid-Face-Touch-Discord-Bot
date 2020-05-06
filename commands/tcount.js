module.exports = message => {
    const member = message.mentions.members.first()
    const command = message.content.split(' ', 1)
    if (command == null) {

    } else {
        if (command.toString() === 'total') {
            message.reply(`There have been a total of X face touches recorded.`)
        }

        if (command.toString() === 'profilestats ') {


            if (!member) {
                return message.reply(`Who are you trying to check the count of? You must mention a user.`)
            }
            if (member) {
                return message.reply(`The user ${member.user.tag} has X amount of face touches recorded.`)
            }
        }

        if (command.toString() === 'ping')
        {
            return message.reply(`c!country US`)
        }

    }
}