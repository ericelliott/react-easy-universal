import test from 'tape';
import request from 'supertest';

import app from '../fixtures/server.js';

const errMsg = 'should not return an error';

test('index route', assert => {
  request(app)
    .get('/')
    .expect(200)
    .end((err) => {
      assert.error(err, errMsg);
      assert.end();
    });
});
