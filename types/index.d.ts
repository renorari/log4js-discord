export interface DiscordAppender {
        type: 'log4js-discord';
        // your Discord Webhook URL (see the discord docs)
        url: string;
        // the icon to use for the message
        iconUrl?: string;
        // the username to display with the message
        username: string;
        // (defaults to basicLayout) - the layout to use for the message.
        layout?: Layout;
}

export type Appender = Appender | DiscordAppender;
