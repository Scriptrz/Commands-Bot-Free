const quack1 = "⬛";
const quack2 = ":red_square:";
const { MessageEmbed } = require("discord.js")
const config = require ('../config.json')

    module.exports.run = async (client, message, args) => {
 const user = message.mentions.users.first();
    if (!user) return message.channel.send(`***・Especifique um usuário para shipar!***`)
     if(user && user.id === message.author.id) {
     return message.reply("***・você não pode shipar com você mesmo.***")
     }  
if (message.mentions.users.size < 2) {
    let loveking = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('***・Shipando...***')
        .setDescription(`***・Ship ${message.author} & ${user}!***`)
        .setImage(`https://api.popcatdev.repl.co/ship?user1=${message.author.displayAvatarURL({ dynamic: false, format: "png" })}&user2=${user.displayAvatarURL({ dynamic: false, format: "png" })}`)
        .addField(`***・Medidor de amor***`, ship())
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        
   return message.channel.send(loveking)
} else if (message.mentions.users.size > 1) {
let ruther1 = new MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('***・Shipando...***')
        .setDescription(`***・Ship ${message.mentions.users.first()} & ${message.mentions.users.last()}!***`)
        .setImage(`https://api.popcatdev.repl.co/ship?user1=${message.mentions.users.first().displayAvatarURL({ dynamic: false, format: "png" })}&user2=${message.mentions.users.last().displayAvatarURL({ dynamic: false, format: "png" })}`)
        .addField(`***・Medidor de amor***`, ship())
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(ruther1)
}
}

function ship() {
    const ruther2 = Math.floor(Math.random() * 110) + 0;
    const king = (ruther2/10)
  
    const str = `${quack2.repeat(king)}${quack1.repeat(10 - king)} ${ruther2}%`;
    return str;
}