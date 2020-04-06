import { mainPage, listPage, detailsPage } from '../../common/pages/pokedexPages';
import { notFoundPage } from '../../common/pages/errorPages';
import { getLabels } from '../models/labelModel';
import { getList, getDetails } from '../models/pokemonModel';

export const getListPage = params => {
  return listPage(getList(params), getLabels(params.lang));
};

export const getDetailsPage = params => {
  const details = getDetails(params.id, params.lang)
  return details
    ? detailsPage(details, getLabels(params.lang))
    : notFoundPage(getLabels(params.lang));
};
