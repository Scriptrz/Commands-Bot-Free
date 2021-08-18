exports.run = async (client, message, args) => {

  if (!message.member.hasPermission(["MANAGE_SERVER",])) {
    return message.channel.send("***・Você não tem permissão para usar esse comando.***")
  }
  
  let user = message.mentions.users.first(); 
  if (!user) return message.channel.send("***・Você precisa mencionar o usuário!***");
  
  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send("***・Você precisa inserir o nickname!***");
  
  let membro = message.guild.members.cache.get(user.id);
  
  await membro.setNickname(nick).catch(err => message.channel.send(`Error: ${err}`));
  return message.channel.send(`***・Nome Alterado com sucesso para*** **\`${nick}\`**`);
}