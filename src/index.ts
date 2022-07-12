#! /usr/bin/env node

import { Color, format } from './format';
import { clear, dimensions, print } from './console';
import data from './data.json';

clear();
// print(format('1.0').color(Color.Red) + format(' '.repeat(dimensions.width - 3)).color(Color.Red));
print(`test ${format('fooo', { color: Color.Red })}`);
print(`${data.firstName} ${data.lastName}`);
// print(format(' '.repeat(dimensions.width)).color(Color.Red));
// print(format(`                                      `).color(Color.Red));
// print(format(`  GitHub ${data.social.github}  `).color(Color.Red));
// print(format(`                                      `).color(Color.Red));

// new Text('fooo').color('red').background('blue').underscore()
