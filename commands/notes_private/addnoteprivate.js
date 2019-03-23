const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('./db.json')
    const db = low(adapter)
    var args = message.content.split(" ").slice(1);
    var content_notes = args.join(" ")
    var author = message.author.id;
    if (!args[0]) return message.channel.send("<:false:551460099600678944> **Syntaxe : `b!addnoteprivate <Notes>`**")
    if (!db.get("notes_private").find({ user_id: author }).value()) {

        db.get("notes_private").push({ user_id: author, notes: content_notes }).write()

      } else {

        var usernotesdb = db.get("notes_private").filter({ user_id: author }).find('notes').value()

        var notes = Object.values(usernotesdb)

        db.get("notes_private").find({ user_id: author }).assign({ user_id: author, notes: content_notes }).write()   
}
message.delete();
message.channel.send("<:true:551460100347396107> **Vos notes privée ont bien été actualisés avec succès.**")
}