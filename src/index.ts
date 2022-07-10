#! /usr/bin/env node

import { Color, format } from './format';
import { clear, dimensions, print } from './console';
import data from './data.json';

clear();
print(`test ${format('fooo').color(Color.Green)}`);
print(`${data.firstName} ${data.lastName}`);
// print(format(' '.repeat(dimensions.width)).color(Color.Red));
// print(format(' '.repeat(dimensions.width)).color(Color.Red));
print(format(`GitHub ${data.social.github}`).color(Color.Red));
