import express from 'express';
import { contentHandler, errorHandler } from './middlewares';
import routes from './routes';

const SERVER_PORT = 3000;
const PUBLIC_FOLDER = './public';

const server = express()
  .disable('x-powered-by')
  .use(express.static(PUBLIC_FOLDER))
  .use(contentHandler)
  .use(routes)
  .use(errorHandler)
  .listen(SERVER_PORT, function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`> Started on port ${SERVER_PORT}`);
    }
  });

export default server;
