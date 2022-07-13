import { Format, Font, Color, BackgroundColor } from './constants';

export type StyleCode = Format | Font | Color | BackgroundColor;

export function format(message: string, style: StyleCode[]) {
	const result: string[] = [];
	const modificators = getEscapeSequence(style);

	return result
		.concat(modificators)
		.concat(message.replace(getEscapeSequence([Format.Reset]), modificators))
		.concat(getEscapeSequence([Format.Reset]))
		.join('');
}

function getEscapeSequence(codes: StyleCode[]) {
	const modificatorCode = Array.isArray(codes) ? codes.join(';') : codes;

	return `\x1b[${modificatorCode}m`;
}
