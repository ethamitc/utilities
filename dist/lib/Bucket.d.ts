/**
 * An entry in the bucket.
 */
export interface BucketEntry {
    lastTime: number;
    setTime: number;
    tickets: number;
}
/**
 * The bucket limits.
 */
export interface BucketLimit {
    /**
     * The time between tickets.
     *
     * If timespan is zero, there will be no spacing between usages, this means
     * that a 5/5s bucket ({@link BucketLimit#limit limit} of 5 in 5 seconds
     * {@link Bucket#delay delay}) will accept 5 requests, then will wait for
     * the remaining time.
     *
     * However, if in the previous example, this is set to 1 second, this will
     * then space the requests evenly to 1 request per second until the bucket
     * is consumed.
     */
    timespan: number;
    /**
     * The maximum amount of tickets.
     *
     * This limits the amount of requests that can be made within the
     * {@link Bucket}'s {@link Bucket#delay delay}.
     */
    maximum: number;
}
/**
 * The Bucket that handles ratelimits.
 */
export declare class Bucket<T> {
    /**
     * The amount of milliseconds entries last.
     */
    delay: number;
    /**
     * The bucket limits. If set to null, the requests will be limited to one
     * request per {@link delay} milliseconds.
     */
    limit: Required<BucketLimit>;
    /**
     * The bucket entries for the instance.
     */
    private entries;
    /**
     * Sets the delay for the bucket.
     * @param delay The delay to be set.
     */
    setDelay(delay: number): this;
    /**
     * Sets the limit for the bucket.
     * @param limit The limit to be set.
     */
    setLimit(limit: BucketLimit): this;
    /**
     * Retrieves the amount of time needed for the bucket to unlock.
     * @param id The ID of the entry to check.
     * @returns Always a positive number, 0 if there is no delay.
     */
    take(id: T): number;
    private getEntry;
}
//# sourceMappingURL=Bucket.d.ts.map