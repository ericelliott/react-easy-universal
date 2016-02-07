import test from 'tape';
import request from 'supertest';
import dom from 'cheerio';

import app from '../fixtures/server.js';

const errMsg = 'should not return an error';

test('index route', assert => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      const msg = 'store props should be mapped to rendered output correctly';
      const $ = dom.load(res.text);
      const actual = {
        titleTag: $('title').html(),
        titleHeader: $('.title').html()
      };
      const expected = {
        titleTag: 'Untitled',
        titleHeader: 'Untitled'
      };

      assert.error(err, errMsg);
      assert.deepEqual(actual, expected, msg);

      assert.end();
    });
});
