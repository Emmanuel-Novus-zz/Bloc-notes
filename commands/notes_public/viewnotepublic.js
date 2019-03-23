const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('./db.json')
    const db = low(adapter)
    const member = message.mentions.users.first() || message.author
    const get_notes = db.get("notes_public").find({ user_id: member.id }).value()
    let notes = ''
    if (!get_notes) notes = "<:false:551460099600678944> Aucune notes public défini."
    else {
        let notes_msg = Object.values(get_notes)
        notes = notes_msg[1]
    }
    let profil = new Discord.RichEmbed()
             .setTitle("📋 • __Notes public de " + member.tag + "__")
             .setDescription(notes)
             .setColor("#72D8FF")
        message.channel.send(profil)
}