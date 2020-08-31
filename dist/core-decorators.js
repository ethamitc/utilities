"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyOptions = void 0;
const utils_1 = require("./utils");
/**
 * Decorator function that applies given options to any Klasa piece
 *
 * ```ts
 *	ApplyOptions<CommandOptions>({
 *		name: 'test',
 *		cooldown: 10
 *	})
 *	export default class extends Command {}
 * ```
 * @since 1.0.0
 * @param options The options to pass to the piece constructor
 */
function ApplyOptions(optionsOrFn) {
    return utils_1.createClassDecorator((target) => utils_1.createProxy(target, {
        construct: (ctor, [context, baseOptions = {}]) => new ctor(context, {
            ...baseOptions,
            ...(typeof optionsOrFn === 'function' ? optionsOrFn(context.client) : optionsOrFn)
        })
    }));
}
exports.ApplyOptions = ApplyOptions;
//# sourceMappingURL=core-decorators.js.map