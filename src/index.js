console.log('wesh')
import dotenv from 'dotenv'
import { Client, GatewayIntentBits } from 'discord.js'
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return

  if (interaction.commandName === 'pingui') {
    await interaction.reply('Pong!')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === 'pingui') {
    await msg.reply('Pong!')
    console.log('🚀 ~ file: index.js ~ line 26 ~ msg', msg)
  }
})

// const connection = joinVoiceChannel({
//   channelId: channel.id,
//   guildId: channel.guild.id,
//   adapterCreator: channel.guild.voiceAdapterCreator
// })

client.login(process.env.DISCORD_TOK)
