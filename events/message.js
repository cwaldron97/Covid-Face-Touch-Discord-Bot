const tcount = require('../commands/tcount')

module.exports = (client, message) => {
    if (message.content.startsWith("!tcount")) {
        return tcount(message);
    }
};