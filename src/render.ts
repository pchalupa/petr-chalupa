import { clear } from 'console';
import { print } from './console';

export function render(components: string[]) {
	clear();
	components.forEach((component) => print(component));
}
