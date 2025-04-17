import * as process from 'process';
(window as any).process = process;
(window as any).process.browser = true;
(window as any).process.versions = { node: 'v18.16.0' };    