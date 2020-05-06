const tcount = require('../commands/tcount')
const fbaseresponse = require('../commands/fbaseresponse')

module.exports = (client, message) => {
    const tempchannel = message.channel
    if (message.content.startsWith("!tcount"))
    {
        return tcount(message);
    }
  /*  if (message.content === 'firebasemessage')
        {
            if (message.val === true)
            {
                return fbaseresponse(message);
            }
       }
*/
};





