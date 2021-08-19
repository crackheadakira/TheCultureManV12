const BaseEvent = require('../../utils/structures/BaseEvent');
const discord = require('discord.js');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run(client) {
    console.log(client.user.tag + ' has logged in.');
    setInterval(() => {
      client.user.setActivity(`${client.guilds.cache.size} Servers | n.help`, { type: 'WATCHING' })
    }, 60000); // Runs this every 60 seconds.
  }
}