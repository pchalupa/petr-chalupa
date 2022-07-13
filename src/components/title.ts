import { Color, Font } from '../constants';
import { format } from '../format';

export function title({ message, color = Color.Cyan }: { message: string; color?: Color }) {
	return format(message, [Font.Bright, color]);
}
