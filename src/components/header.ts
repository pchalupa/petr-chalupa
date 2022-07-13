import { format } from '../format';
import { Color, BackgroundColor } from '../constants';
import { dimensions } from '../console';

export function header({ version }: { version: string }) {
	return format(`${version} ${' '.repeat(dimensions.width - version.length - 1)}`, [
		Color.Black,
		BackgroundColor.Green,
	]);
}
