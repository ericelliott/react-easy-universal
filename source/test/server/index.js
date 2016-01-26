import test from 'tape';
import request from 'supertest';

import React from 'react';
import express from 'express';

import createApp from '../fixtures/create-app';
import routes from '../fixtures/routes.js';
import server from '../fixtures/server.js';

const errMsg = 'should not return an error';

test('index route', assert => {
  const app = express();

  request(createApp({ React, app }))
    .get('/')
    .expect(200)
    .end((err, res) => {
      assert.error(err, errMsg);
      assert.end();
    });
});
