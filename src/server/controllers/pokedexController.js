import { mainPage, gridPage, detailsPage } from '../../common/pages/pokedexPages';
import { getLabels } from '../models/labelModel';
import { getList, getDetails } from '../models/pokemonModel';

export const getListPage = req => {
  return gridPage(getList(req), getLabels(req));
};

export const getDetailsPage = req => {
  return detailsPage(getDetails(req), getLabels(req));
};
