import { format } from '../format';
import { Color, BackgroundColor, Format } from '../constants';

export function block({
	message,
	color = Color.White,
	backgroundColor = BackgroundColor.Black,
}: {
	message: string;
	color?: Color;
	backgroundColor?: BackgroundColor;
}) {
	const messageLenght = message.length;
	const space = format(`${' '.repeat(messageLenght + 4)}\n`, [backgroundColor]);

	return [space, format(`  ${message}  \n`, [color, backgroundColor]), space].join('');
}
