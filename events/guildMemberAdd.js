module.exports = (client, member) => {
    member.send('Welcome on the server! Don\'t you dare touch your face while you are here! You will be shamed, and your friends will laugh.')
    member.send('Here are the list of bot commands you can use: \n' +
        '!tcount ping: generates a response from the bot to ensure it is online. \n' +
        '!tcount current: give information about the current number of face touches registered. \n' +
        '!tcount covid: pings the other covid bot to see current statistics in the US. \n' +
        '!tcount bell: a little surprise! \n'
        )

}