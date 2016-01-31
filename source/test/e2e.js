import runner from 'nightwatch-autorun';
import express from 'express';
import path from 'path';

import server from './fixtures/server.js';

const buildDir = './fixtures/static';
const staticDir = path.join(__dirname, buildDir);

const NODE_PORT = process.env.NODE_PORT || 3000;

server.use('/static', express.static(staticDir));

runner({port: NODE_PORT, server});
