'use strict';

const { WebhookClient, EmbedBuilder } = require('discord.js');

function discordAppender(config, layout) {
  return (loggingEvent) => {
    const {
      url, iconUrl, username, color
    } = config;
    const text = layout(loggingEvent, config.timezoneOffset);

    const webhookClient = new WebhookClient(url, {
      username: username,
      avatarURL: iconUrl
    });

    const embed = new EmbedBuilder()
      .setDescription(text)
      .setColor(color);

    webhookClient.send({
      embeds: [embed]
    }).catch(console.error); //eslint-disable-line
  };
}

function configure(config, layouts) {
  let layout = layouts.basicLayout;
  if (config.layout) {
    layout = layouts.layout(config.layout.type, config.layout);
  }

  return discordAppender(config, layout);
}

module.exports.configure = configure;
