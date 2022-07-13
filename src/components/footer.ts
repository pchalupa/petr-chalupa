import { format } from '../format';
import { BackgroundColor } from '../constants';
import { dimensions } from '../console';

export function footer() {
	return format(' '.repeat(dimensions.width), [BackgroundColor.Green]);
}
