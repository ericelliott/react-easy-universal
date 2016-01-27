import express from 'express';
import React from 'react';

import wireApp from './wire-app.js';

// Passing in the express app lets it know you want the server
// version, and it wires up the route automatically
const app = wireApp({ React, app: express() });

export default app;
