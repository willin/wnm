const test = require('ava');
const SDK = require('../src');

test('Hot Comment', async (t) => {
  const { status } = await SDK.comment.hot({
    id: 400162138,
    type: 0
  });
  t.is(status, 200);
});

test('User Detail', async (t) => {
  const { status } = await SDK.user.detail({
    uid: 32953014
  });
  t.is(status, 200);
});

test('Artists', async (t) => {
  const { status } = await SDK.artists({
    id: 6452
  });
  t.is(status, 200);
});

test('toplist', async (t) => {
  const { status } = await SDK.toplist();
  t.is(status, 200);
});

test('undefined module', (t) => {
  const result = SDK.test.artists();
  t.is(result, undefined);
});

test('cookie', async (t) => {
  const { status } = await SDK.toplist({
    cookie: { os: 'pc' }
  });
  t.is(status, 200);
});
