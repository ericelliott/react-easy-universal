import express from 'express';
import React from 'react';

import createApp from './create-app.js';

const expressApp = express();

// Passing in the express app lets it know you want the server
// version, and it wires up the route automatically
const app = createApp({ React, expressApp });

export default app;
