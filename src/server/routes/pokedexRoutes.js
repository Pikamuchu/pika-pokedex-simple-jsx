import express from 'express';
import * as pokedexController from '../controllers/pokedexController';

const getLang = req => req.acceptsLanguages('en', 'es');

const routes = express
  .Router()
  .get('/', (req, res) => {
    res.redirect('/pokedex');
  })
  .get('/pokedex', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(pokedexController.getListPage({...req.params, lang: getLang(req)}));
  })
  .get('/pokedex/:id', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(pokedexController.getDetailsPage({...req.params, lang: getLang(req)}));
  });

export default routes;
