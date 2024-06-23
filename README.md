# Discord Appender for log4js-node

Sends log events to a [Discord](https://discord.com) channel. This is an optional appender for use with [log4js](https://log4js-node.github.io/log4js-node/).
```bash
npm install log4js-discord
```

## Configuration

* `type` - `log4js-discord`
* `url` - `string` -your Discord Webhook URL (see the discord docs)
* `icon_url` - `string` (optional) - the icon to use for the message
* `username` - `string` - the username to display with the message
* `layout` - `object` (optional, defaults to `basicLayout`) - the layout to use for the message (see [layouts](layouts.md)).

## Example

```javascript
log4js.configure({
  appenders: {
    alerts: {
      type: 'log4js-discord',
      url: 'https://discord.com/api/webhooks/...',
      username: 'our_application'
    }
  },
  categories: {
    default: { appenders: ['alerts'], level: 'error' }
  }
});
```

This configuration will send all error (and above) messages, with the username `our_application`.
