import { mainPage, gridPage, detailsPage } from '../../common/pages/pokedexPages';
import { getLabels } from '../models/labelModel';
import { getList, getDetails } from '../models/pokemonModel';

export const getListPage = params => {
  return gridPage(getList(params), getLabels(params.lang));
};

export const getDetailsPage = params => {
  return detailsPage(getDetails(params.id, params.lang), getLabels(params.lang));
};
