import type { MessageEmbed, MessageMentionOptions, MessageOptions } from 'discord.js';
/**
 * Exclude null and undefined from T
 */
declare type Defined<T> = T extends undefined ? never : T;
export declare type MessageBuilderFileResolvable = Defined<MessageOptions['files']>[number];
export declare type MessageBuilderCodeResolvable = Defined<MessageOptions['code']>;
export declare type MessageBuilderSplitResolvable = Defined<MessageOptions['split']>;
export declare type MessageBuilderResolvable = Omit<MessageOptions, 'embed' | 'disableMentions' | 'reply'> & {
    embed?: MessageEmbed;
};
/**
 * A message builder class, it implements the {@link https://discord.js.org/#/docs/main/stable/typedef/MessageOptions MessageOptions}
 * interface.
 */
export declare class MessageBuilder implements MessageOptions {
    /**
     * Whether or not the message should be spoken aloud.
     * @default false
     */
    tts?: boolean;
    /**
     * The nonce for the message.
     * @default ''
     */
    nonce?: string;
    /**
     * The content for the message. If set to undefined and the builder is used to edit, the content will not be
     * replaced.
     */
    content?: string;
    /**
     * An embed for the message. If set to undefined and the builder is used to edit, the embed will not be replaced.
     */
    embed?: MessageEmbed;
    /**
     * Which mentions should be parsed from the message content.
     */
    allowedMentions?: MessageMentionOptions;
    /**
     * Files to send with the message. This should not be set when editing a message, as Discord does not support
     * editing file attachments.
     */
    files?: MessageBuilderFileResolvable[];
    /**
     * Language for optional codeblock formatting to apply.
     */
    code?: MessageBuilderCodeResolvable;
    /**
     * Whether or not the message should be split into multiple messages if it exceeds the character limit. If an object
     * is provided, these are the options for splitting the message.
     */
    split?: MessageBuilderSplitResolvable;
    constructor(options?: MessageBuilderResolvable);
    /**
     * Sets the value for the [[MessageBuilder.tts]] field.
     * @param tts Whether or not the message should be spoken aloud.
     */
    setTTS(tts?: boolean): this;
    /**
     * Sets the value for the [[MessageBuilder.nonce]] field.
     * @param nonce The nonce for the message.
     */
    setNonce(nonce?: string): this;
    /**
     * Sets the value for the [[MessageBuilder.content]] field.
     * @param content The content for the message. If set to undefined and the builder is used to edit, the content will
     * not be replaced.
     */
    setContent(content?: string): this;
    /**
     * Sets the value for the [[MessageBuilder.embed]] field.
     * @param embed An embed for the message. If set to undefined and the builder is used to edit, the embed will not be
     * replaced.
     */
    setEmbed(embed?: MessageEmbed): this;
    /**
     * Sets the value for the [[MessageBuilder.allowedMentions]] field.
     * @param allowedMentions Which mentions should be parsed from the message content.
     */
    setAllowedMentions(allowedMentions?: MessageMentionOptions): this;
    /**
     * Adds a new value for the [[MessageBuilder.files]] field array.
     * @param file The file to add to the [[MessageBuilder.files]] field array.
     */
    addFile(file: MessageBuilderFileResolvable): this;
    /**
     * Sets a single value for the [[MessageBuilder.files]] field array.
     * @param file The file to send with the message. This should not be set when editing a message, as Discord does not
     * support editing file attachments.
     */
    setFile(file: MessageBuilderFileResolvable): this;
    /**
     * Sets the value for the [[MessageBuilder.files]] field.
     * @param files The files to send with the message. This should not be set when editing a message, as Discord does
     * not support editing file attachments.
     */
    setFiles(files?: MessageBuilderFileResolvable[]): this;
    /**
     * Sets the value for the [[MessageBuilder.code]] field.
     * @param code Language for optional codeblock formatting to apply.
     */
    setCode(code?: MessageBuilderCodeResolvable): this;
    /**
     * Sets the value for the [[MessageBuilder.split]] field.
     * @param split Whether or not the message should be split into multiple messages if it exceeds the character limit.
     * If an object is provided, these are the options for splitting the message.
     */
    setSplit(split?: MessageBuilderSplitResolvable): this;
    /**
     * The default values for all MessageBuilder instances.
     */
    static defaults: MessageBuilderResolvable;
}
export {};
//# sourceMappingURL=MessageBuilder.d.ts.map