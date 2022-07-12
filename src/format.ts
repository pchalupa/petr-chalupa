const controlCharacter = '\x1b';
export enum Color {
	Black = 0,
	Red = 41,
	Green = 32,
}

export function format(message: string, style: { color: Color }) {
	const result: string[] = [];
	return result.concat(make(style.color)).concat(message).concat(`${controlCharacter}[0m`).join('');
	return `${result.join()}${message}${controlCharacter}[0m`;
}

export function make(code: number) {
	return `\x1b[${code}m`;
}
