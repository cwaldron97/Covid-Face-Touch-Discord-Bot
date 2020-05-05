module.exports = message => {
    const member = message.mentions.members.first()

    if (!member) {
        return message.reply(`Who are you trying to check the count of? You must mention a user.`)
    }

}