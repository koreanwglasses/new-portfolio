import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Console } from './components/console';
import { Shell } from './scripts/shell';
import { Terminal } from './core/terminal'

const terminal = new Terminal({container: document.getElementById('root')});
new Shell({terminal});