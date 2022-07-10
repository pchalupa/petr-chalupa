#! /usr/bin/env node

import { Color, format } from './format';
import { clear, print } from './console';
import data from './data.json';

clear();
print(`test ${format('fooo').color(Color.Green).color(Color.Red)}`);
print(data.firstName);
