import { mainPage, listPage, detailsPage } from '../views/pages/pokemonPages';
import { errorPage } from '../views/pages/errorPages';
import { getLabels } from '../models/labelModel';
import { getListItems, getListFilters, getDetails } from '../models/pokemonModel';

export const getListPage = async (req, res) => {
  const params = req.params;
  const items = await getListItems(params);
  const filters = {};//await getListFilters(params);
  const page = listPage({items, filters}, getLabels(params.lang));
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

export const getListItemsJson = async (req, res) => {
  const params = req.params;
  const list = await getListItems(params);
  res.json(list);
};

export const getListFiltersJson = async (req, res) => {
  const params = req.params;
  const list = await getListFilters(params);
  res.json(list);
};

export const getDetailsJson = async (req, res) => {
  const params = req.params;
  const details = await getDetails(params.id, params.lang);
  res.json(details);
};
