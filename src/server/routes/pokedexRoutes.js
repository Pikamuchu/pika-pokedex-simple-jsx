import express from 'express';
import * as pokedexController from '../controllers/pokedexController';

const routes = express
  .Router()
  .get('/', (req, res) => {
    res.redirect('/pokedex');
  })
  .get('/pokedex', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(pokedexController.getListPage(req));
  })
  .get('/pokedex/*', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(pokedexController.getDetailsPage(req));
  });

export default routes;
