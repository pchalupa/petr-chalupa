import { type Color, type BackgroundColor, Format } from './constants';

export function format(message: string, style: { color?: Color; backgroundColor?: BackgroundColor; format?: Format }) {
	const result: string[] = [];
	const modificators = make(Object.values(style) as unknown as number);

	return result.concat(modificators).concat(message).concat(make(Format.Reset)).join('');
}

function make(code: number): string;
function make(codes: number[] | number) {
	const modificatorCode = Array.isArray(codes) ? codes.join(';') : codes;

	return `\x1b[${modificatorCode}m`;
}
