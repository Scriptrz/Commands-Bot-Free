const Discord = require("discord.js");

module.exports = {

  run : async (client, message, args) => {
  let ruther = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let king = new Discord.MessageEmbed() 
    .setColor("#a900ff") 
    .setTitle(`***・Perfil de ${ruther.tag}***`) 
    .setDescription(`***Clique [aqui](${ruther.avatarURL({ dynamic: true, format: "png", size: 1024 })}) para baixar a imagem.***`)
    .setImage(ruther.avatarURL({ dynamic: true, format: "png", size: 1024 })) 
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    
    message.channel.send(king);


  }

}