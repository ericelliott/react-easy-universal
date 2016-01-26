import express from 'express';
import React from 'react';

import renderLayout from './path/to/render-layout.js';
import createApp from './path/to/create-app.js';

const expressApp = express();

// Passing in the express app lets it know you want the server
// version, and it wires up the route automatically
const app = createApp({ React, expressApp });

export default app;
