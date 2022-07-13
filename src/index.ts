#! /usr/bin/env node

import data from './assets/data.json';
import { block } from './components/block';
import { blankLine } from './components/blankLine';
import { header } from './components/header';
import { render } from './render';
import { footer } from './components/footer';
import { BackgroundColor, Color, Font } from './constants';
import { list } from './components/list';
import { format } from './format';
import { title } from './components/title';

const frame = [
	header({ version: 'petr-chalupa@1.0.2' }),
	blankLine(),
	title({ message: `Hello, I am ${format(`${data.firstName} ${data.lastName}`, [Color.Magenta])}` }),
	format(`${data.role} at ${data.company}`, [Font.Dim, Color.White]),
	blankLine(),
	title({ message: 'Skills:', color: Color.Green }),
	list({ items: data.skills }),
	blankLine(),
	block({ message: `GitHub: ${data.links.github}` }),
	block({
		message: `LinkedIn: ${data.links.linkedIn}`,
		backgroundColor: BackgroundColor.Blue,
	}),
	blankLine(),
	footer(),
];

render(frame);
