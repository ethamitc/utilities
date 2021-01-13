/// <reference types="discord.js" />
import { PaginatedMessage } from './PaginatedMessage';
/**
 * This is a LazyPaginatedMessage. Instead of resolving all pages that are functions on [[PaginatedMessage.run]] will resolve when requested.
 */
export declare class LazyPaginatedMessage extends PaginatedMessage {
    /**
     * Only resolves the page corresponding with the handler's current index.
     */
    resolvePagesOnStart(): Promise<void>;
    /**
     * Resolves the page corresponding with the given index. This also resolves the index's before and after the given index.
     * @param index The index to resolve. Defaults to handler's current index.
     */
    resolvePage(index?: number): Promise<import("discord.js").APIMessage | null>;
}
//# sourceMappingURL=LazyPaginatedMessage.d.ts.map