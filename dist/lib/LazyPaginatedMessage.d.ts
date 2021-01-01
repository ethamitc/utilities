/// <reference types="discord.js" />
import { PaginatedMessage } from './PaginatedMessage';
export declare class LazyPaginatedMessage extends PaginatedMessage {
    resolvePagesOnStart(): Promise<void>;
    resolvePage(index?: number): Promise<import("discord.js").APIMessage | null>;
}
//# sourceMappingURL=LazyPaginatedMessage.d.ts.map