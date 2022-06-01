const { Client, Intents, Collection } = require('discord.js')
const intents = ["GUILDS", "GUILD_MEMBERS"];
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.
    FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES,],
})

const { token, prefix } = require('./config.json');

client.commands = new Collection()

client.once('ready', () => {
  console.log(`로그인 완료 | ${client.user.tag}!`)
})


client.on('message', async message => {
  if (message.content === '핑') return message.reply('퐁')
  await DokdoHandler.run(message)
})

client.on('guildMemberAdd', member => {
  member.user.send(`${member.user.username}님! ${member.guild.name}서버에 들어오신걸 환영합니다`).then().catch((error) => { if (error) return })
  const role = button.guild.roles.cache.get("역활 아디")
  member.roles.add(role)
  // code...
  try {
  } catch (error) {
    return console.error(error)
  }
});

client.login("")
