import express from 'express';
import asyncHandler from 'express-async-handler';
import { paramsHandler, contentHandler } from './middlewares';
import * as pokemonsController from './controllers/pokemonsController';

const routes = express.Router();

routes.get('/', paramsHandler, (req, res) => {
  res.redirect('/pokemons');
});
routes.get('/pokemons', paramsHandler, contentHandler, asyncHandler(pokemonsController.getListPage));
routes.get('/pokemons/:id', paramsHandler, contentHandler, asyncHandler(pokemonsController.getDetailsPage));
routes.get('/api/pokemons', paramsHandler, asyncHandler(pokemonsController.getListItemsJson));
routes.get('/api/pokemons/:id', paramsHandler, asyncHandler(pokemonsController.getDetailsJson));
routes.get('/api/filters/pokemon', paramsHandler, asyncHandler(pokemonsController.getListFiltersJson));

export default routes;
