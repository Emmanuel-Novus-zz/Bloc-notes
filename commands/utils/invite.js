const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var invite = new Discord.RichEmbed()
        .setDescription(`🔧 Ajouter ${client.user.username} sur votre serveur discord !`)
        .addField("__**Lien d'invitation avec les permissions d'administrateurs :**__", "[**Cliquez ici**](https://discordapp.com/oauth2/authorize?client_id=558773892177592349&scope=bot&permissions=8)")
        .addField("__**Lien d'invitation avec les permissions que vous pouvez personnaliser :**__", "[**Cliquez ici**](https://discordapp.com/oauth2/authorize?client_id=558773892177592349&scope=bot&permissions=1342319703)")
        .setColor("#72D8FF")
    message.channel.send(invite)
}
