import { stdout } from 'process';

export function print(message: string) {
	console.log(message);
}

export function clear() {
	console.clear();
}

export const dimensions = {
	width: stdout.columns,
	height: stdout.rows,
};
