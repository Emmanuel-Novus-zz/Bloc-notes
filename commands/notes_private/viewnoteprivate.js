const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('./db.json')
    const db = low(adapter)
    const get_notes = db.get("notes_private").find({ user_id: message.author.id }).value()
    let notes = ''
    if (!get_notes) notes = "<:false:551460099600678944> Aucune notes privée défini."
    else {
        let notes_msg = Object.values(get_notes)
        notes = notes_msg[1]
    }
    let profil = new Discord.RichEmbed()
             .setTitle("📋 • __Vos notes privée__")
             .setDescription(notes)
             .setColor("#72D8FF")
    message.author.send(profil)
    message.channel.send("<:true:551460100347396107> **Vos notes privée ont bien été envoyé en message privée.**")
}