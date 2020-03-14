import express from 'express';
import { mainPage, gridPage, detailsPage} from '../common/pages/pokedexPages';
import labels from '../common/labelService';
import { getGridData, getDetailData } from './dataService';

const SERVER_PORT = 3000;
const PUBLIC_FOLDER = './public';

const server = express()
  .disable('x-powered-by')
  .use(express.static(PUBLIC_FOLDER))
  .get('/', (req, res) => {
    res.redirect('/pokedex');
  })
  .get('/pokedex', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(gridPage(getGridData(req), getLabels(req)));
  })
  .get('/pokedex/*', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(detailsPage(getDetailData(req), getLabels(req)));
  })
  .listen(SERVER_PORT, function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`> Started on port ${SERVER_PORT}`);
  });

const getLabels = req => labels(req.acceptsLanguages('es', 'en'));

export default server;
