import type { CategoryChannel, Channel, DMChannel, GuildChannel, NewsChannel, PartialGroupDMChannel, StoreChannel, VoiceChannel } from 'discord.js';
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/CategoryChannel CategoryChannel}
 * @param channel The channel to check
 */
export declare function isCategoryChannel(channel: Channel): channel is CategoryChannel;
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/DMChannel DMChannel}
 * @param channel The channel to check
 */
export declare function isDMChannel(channel: Channel): channel is DMChannel;
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/PartialGroupDMChannel PartialGroupDMChannel}
 * @param channel The channel to check
 */
export declare function isGroupChannel(channel: Channel): channel is PartialGroupDMChannel;
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/GuildChannel GuildChannel}
 * @param channel The channel to check
 */
export declare function isGuildBasedChannel(channel: Channel): channel is GuildChannel;
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/NewsChannel NewsChannel}
 * @param channel The channel to check
 */
export declare function isNewsChannel(channel: Channel): channel is NewsChannel;
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/StoreChannel StoreChannel}
 * @param channel The channel to check
 */
export declare function isStoreChannel(channel: Channel): channel is StoreChannel;
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/TextChannel TextChannel}
 * @param channel The channel to check
 */
export declare function isTextChannel(channel: Channel): channel is StoreChannel;
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/VoiceChannel VoiceChannel}
 * @param channel The channel to check
 */
export declare function isVoiceChannel(channel: Channel): channel is VoiceChannel;
//# sourceMappingURL=type-guards.d.ts.map