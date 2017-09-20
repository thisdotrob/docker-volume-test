const express = require('express');
const Inotify = require('inotify').Inotify;
const inotify = new Inotify(); //persistent by default, new Inotify(false) //no persistentconst express = require('express');

const arg = {
  path: '.',
  watch_for: Inotify.IN_ALL_EVENTS,
  callback: (event) => {
    console.log('EVENT >>> ', event);
  },
};

const wd = inotify.addWatch(arg);

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
console.log('test from host');
console.log('test from container');
