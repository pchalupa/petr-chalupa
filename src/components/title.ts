import { Format } from '../constants';
import { format } from '../format';

export function title(message: string) {
	return format(message, { format: Format.Bright });
}
