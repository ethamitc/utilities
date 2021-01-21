import type { APIMessage, NewsChannel, TextChannel } from 'discord.js';
import { PaginatedMessage } from './PaginatedMessage';
/**
 * This is a LazyPaginatedMessage. Instead of resolving all pages that are functions on [[PaginatedMessage.run]] will resolve when requested.
 */
export declare class LazyPaginatedMessage extends PaginatedMessage {
    /**
     * Only resolves the page corresponding with the handler's current index.
     */
    resolvePagesOnRun(channel: TextChannel | NewsChannel): Promise<void>;
    /**
     * Resolves the page corresponding with the given index. This also resolves the index's before and after the given index.
     * @param index The index to resolve. Defaults to handler's current index.
     */
    resolvePage(channel: TextChannel | NewsChannel, index: number): Promise<APIMessage>;
}
//# sourceMappingURL=LazyPaginatedMessage.d.ts.map