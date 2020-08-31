import type { SapphireClient } from '@sapphire/framework';
import type { PieceOptions } from '@sapphire/pieces';
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
export declare function ApplyOptions<T extends PieceOptions>(optionsOrFn: T | ((client: SapphireClient) => T)): ClassDecorator;
//# sourceMappingURL=core-decorators.d.ts.map