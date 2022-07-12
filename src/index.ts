#! /usr/bin/env node

import data from './assets/data.json';
import { block } from './components/block';
import { blankLine } from './components/blankLine';
import { header } from './components/header';
import { render } from './render';
import { title } from './components/title';
import { subtitle } from './components/subtitle';
import { footer } from './components/footer';

const screen = [
	header({ version: '1.0' }),
	blankLine(),
	title(`Hello, I am ${data.firstName} ${data.lastName}`),
	subtitle(`${data.role} at ${data.company}`),
	blankLine(),
	block(`GitHub ${data.social.github}`),
	blankLine(),
	footer(),
];

render(screen);
