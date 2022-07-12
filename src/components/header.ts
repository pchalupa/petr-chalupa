import { format } from '../format';
import { Color, BackgroundColor } from '../constants';
import { dimensions } from '../console';

export function header({ version }: { version: string }) {
	return format(`${version} ${' '.repeat(dimensions.width - 4)}`, {
		color: Color.Black,
		backgroundColor: BackgroundColor.White,
	});
}
