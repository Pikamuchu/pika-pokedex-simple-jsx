import { mainPage, listPage, detailsPage } from '../../common/views/pages/pokedexPages';
import { errorPage } from '../../common/views/pages/errorPages';
import { getLabels } from '../models/labelModel';
import { getList, getDetails } from '../models/pokemonModel';

export const getListPage = async (req, res) => {
  const params = req.params;
  const list = await getList(params);
  const page = listPage(list, getLabels(params.lang));
  res.end(page);
};

export const getDetailsPage = async (req, res) => {
  const params = req.params;
  const details = await getDetails(params.id, params.lang);
  const page = details
    ? detailsPage(details, getLabels(params.lang))
    : errorPage({ message: 'Pokemon not found' }, getLabels(params.lang));
  res.end(page);
};
