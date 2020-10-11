/// <reference types="node" />
import type { EventEmitter } from 'events';
/**
 * A filter for an EventIterator.
 */
export declare type EventIteratorFilter<V> = (value: V) => boolean;
/**
 * Options to be passed to an EventIterator.
 */
export interface EventIteratorOptions<V> {
    /**
     * The filter.
     */
    filter?: EventIteratorFilter<V>;
    /**
     * The timeout in ms before ending the EventIterator.
     */
    idle?: number;
    /**
     * The limit of events that pass the filter to iterate.
     */
    limit?: number;
}
/**
 * An EventIterator, used for asynchronously iterating over received values.
 */
export declare class EventIterator<V extends unknown[]> implements AsyncIterableIterator<V> {
    #private;
    /**
     * The emitter to listen to.
     */
    readonly emitter: EventEmitter;
    /**
     * The event the event iterator is listening for to receive values from.
     */
    readonly event: string;
    /**
     * The filter used to filter out values.
     */
    filter: EventIteratorFilter<V>;
    /**
     * @param emitter The event emitter to listen to.
     * @param event The event we're listening for to receives values from.
     * @param limit The amount of values to receive before ending the iterator.
     * @param options Any extra options.
     */
    constructor(emitter: EventEmitter, event: string, options?: EventIteratorOptions<V>);
    /**
     * Whether or not the EventIterator has ended.
     */
    get ended(): boolean;
    /**
     * Ends the EventIterator.
     */
    end(): void;
    /**
     * The next value that's received from the EventEmitter.
     */
    next(): Promise<IteratorResult<V>>;
    /**
     * Handles what happens when you break or return from a loop.
     */
    return(): Promise<IteratorResult<V>>;
    /**
     * Handles what happens when you encounter an error in a loop.
     */
    throw(): Promise<IteratorResult<V>>;
    /**
     * The symbol allowing EventIterators to be used in for-await-of loops.
     */
    [Symbol.asyncIterator](): AsyncIterableIterator<V>;
    /**
     * Pushes a value into the queue.
     */
    protected push(...value: V): void;
}
//# sourceMappingURL=index.d.ts.map