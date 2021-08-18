const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const ruther = new Discord.MessageEmbed() 

    .setColor("#a900ff")
    .setTitle(`***・Imagem ${message.guild.name}***`)
    .setDescription(`***Clique [aqui](${message.guild.iconURL()}) para baixar o Ícone do Servidor***`)
    .setImage(message.guild.iconURL({ dynamic: true, size: 2048 }))
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))

    message.channel.send(ruther)

};