export interface Thenable {
    then: (...args: unknown[]) => unknown;
    catch: (...args: unknown[]) => unknown;
}
/**
 * Verify if an object is a promise.
 * @param input The promise to verify
 */
export declare function isThenable(input: unknown): input is Thenable;
//# sourceMappingURL=isThenable.d.ts.map