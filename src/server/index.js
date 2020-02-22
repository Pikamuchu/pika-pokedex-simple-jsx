import express from 'express';
import mainPage from '../common/pages/mainPage';

const SERVER_PORT = 3000;
const PUBLIC_FOLDER = './public';

const server = express()
  .disable('x-powered-by')
  .use(express.static(PUBLIC_FOLDER))
  .get('/*', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(mainPage('Welcome to simple-jsx example page: ' + req.url).toString());
  })
  .listen(SERVER_PORT, function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`> Started on port ${SERVER_PORT}`);
  });

export default server;
