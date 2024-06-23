'use strict';

const { WebhookClient } = require('discord.js');

function discordAppender(config, layout) {
  return (loggingEvent) => {
    const {
      url, iconUrl, username
    } = config;
    const text = layout(loggingEvent, config.timezoneOffset);

    const webhookClient = new WebhookClient({
      url: url,
      username: username,
      avatarURL: iconUrl
    });

    if (text.length > (2000 - 8)) {
      const textArray = text.match(/[\s\S]{1,1992}/g);
      textArray.forEach((slicedText) => {
        webhookClient.send({
          content: `\`\`\`\n${slicedText}\n\`\`\``
        }).catch(console.error); //eslint-disable-line
      });
    } else {
      webhookClient.send({
        content: `\`\`\`\n${text}\n\`\`\``
      }).catch(console.error); //eslint-disable-line
    }
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
