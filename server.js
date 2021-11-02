// Listen on a specific host via the HOST environment variable
const host = 'localhost';
// Listen on a specific port via the PORT environment variable
const port = 8080;

const server = require('cors-anywhere');

server
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, () => {
    // eslint-disable-next-line no-console
    console.log('Status: ok');
  });
