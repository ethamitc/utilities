import type { APIMessage, User, TextChannel, NewsChannel, Message, ReactionCollector } from 'discord.js';
export declare class PaginatedMessage {
    pages: MessagePage[];
    messages: (APIMessage | null)[];
    actions: Map<string, IPaginatedMessageAction>;
    index: number;
    idle: number;
    constructor({ pages, actions }?: PaginatedMessageOptions);
    setIndex(index: number): this;
    setIdle(idle: number): this;
    setActions(actions: IPaginatedMessageAction[]): this;
    addActions(actions: IPaginatedMessageAction[]): this;
    addAction(action: IPaginatedMessageAction): this;
    setPages(pages: MessagePage[]): this;
    addPages(pages: MessagePage[]): this;
    addPage(page: MessagePage): this;
    run(author: User, channel: TextChannel | NewsChannel): Promise<this>;
    resolvePagesOnRun(): Promise<void>;
    resolvePage(index?: number): Promise<APIMessage | null>;
    clone(): PaginatedMessage;
    static defaultActions: IPaginatedMessageAction[];
}
export interface IPaginatedMessageAction {
    id: string;
    run(context: PaginatedMessageActionContext): Awaited<unknown>;
}
export interface PaginatedMessageActionContext {
    handler: PaginatedMessage;
    author: User;
    channel: TextChannel | NewsChannel;
    response: Message;
    collector: ReactionCollector;
}
export interface PaginatedMessageOptions {
    pages?: MessagePage[];
    actions?: IPaginatedMessageAction[];
}
export declare type MessagePage = ((index: number, pages: MessagePage[], handler: PaginatedMessage) => Awaited<APIMessage>) | APIMessage;
declare type Awaited<T> = PromiseLike<T> | T;
export {};
//# sourceMappingURL=PaginatedMessage.d.ts.map