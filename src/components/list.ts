import { Color } from '../constants';
import { format } from '../format';

export function list({ items }: { items: string[] }) {
	return items.map((item) => format(`* ${item}`, [Color.White])).join('\n');
}
