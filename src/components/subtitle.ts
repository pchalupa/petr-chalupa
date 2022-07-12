import { format } from '../format';
import { Format } from '../constants';

export function subtitle(message: string) {
	return format(message, { format: Format.Dim });
}
