const path = require('path');
const templates = path.resolve(process.cwd(), './packages/theme-chalk/src');

const chokidar = require('chokidar');
let watcher = chokidar.watch([templates]);

watcher.on('ready', function() {
  watcher
    .on('change', function() {
      exec('yarn build:theme');
    });
});

function exec(cmd) {
  return require('child_process').execSync(cmd).toString().trim();
}
