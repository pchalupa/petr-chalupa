import { dimensions } from './console';

const controlCharacter = '\x1b';
export enum Color {
	Black = 0,
	Red = 41,
	Green = 32,
}

export function format(message: string) {
	return {
		color: (color: Color) => colorize(color, message),
		underscore: () => {},
		center: () => console.log(dimensions),
	};
}

function colorize(color: Color, message: string) {
	return controlCharacter + '[' + color + 'm' + message + controlCharacter + '[' + Color.Black + 'm';
}

function font() {}
