import { format } from '../format';
import { Color, BackgroundColor } from '../constants';

export function block(message: string) {
	const messageLenght = message.length;
	const space = format(`${' '.repeat(messageLenght + 4)}\n`, { backgroundColor: BackgroundColor.Black });

	return [
		space,
		format(`  ${message}  \n`, { color: Color.White, backgroundColor: BackgroundColor.Black }),
		space,
	].join('');
}
