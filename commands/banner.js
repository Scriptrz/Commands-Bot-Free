const {MessageEmbed} = require('discord.js');
const axios = require('axios');

module.exports = {

    run: async(client, message, args) => {
const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
if (!user) return message.reply('***<a:aviso:866673470574166026>・Mencione um usuário para pegar o banner!***');

    let fulano = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; 

axios
    .get(`https://discord.com/api/users/${user.id}`, {
    headers: {
        Authorization: `Bot ${client.token}`,
    },
})
.then((res) => {
    const { banner } = res.data;
    if(banner) {
        const extension = banner.startsWith("a_") ? '.gif?size=1024' : '.png?size=1024';
        const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`;

        const ruther = new MessageEmbed()
        .setTitle(`***<a:aviso:866673470574166026>・Banner de ${fulano.tag}***`) 
        .setDescription(`***Clique [aqui](${url}) para baixar a imagem.***`)
        .setImage(url)
        .setColor("#a900ff")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

        message.channel.send(ruther)
    }

  })

}} 