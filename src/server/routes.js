import express from 'express';
import asyncHandler from 'express-async-handler';
import { paramsHandler } from './middlewares';
import * as pokedexController from './controllers/pokedexController';

const routes = express.Router();

routes.get('/', paramsHandler, (req, res) => {
  res.redirect('/pokedex');
});
routes.get('/pokedex', paramsHandler, asyncHandler(pokedexController.getListPage));
routes.get('/pokedex/:id', paramsHandler, asyncHandler(pokedexController.getDetailsPage));

export default routes;
