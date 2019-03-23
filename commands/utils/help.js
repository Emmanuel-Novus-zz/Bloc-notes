const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
        .setTitle("📋 • __Listes des commandes disponibles__")
        .addField("🔓 • __Note public__ <:online:555366525155016704>", "`addnotepublic`, `viewnotepublic`")
        .addField("🔒 • __Note privée__ <:online:555366525155016704>", "`addnoteprivate`, `viewnoteprivate`")
        .addField("🔨 • __Utilitaires__ <:online:555366525155016704>", "`help`, `invite`, `infobot`")
        .setThumbnail(`${client.user.avatarURL}`)
        .setColor("#72D8FF")   
    message.channel.send(help)
}
