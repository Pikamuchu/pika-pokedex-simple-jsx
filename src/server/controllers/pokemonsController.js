import { mainPage, listPage, detailsPage } from '../views/pages/pokemonPages';
import { errorPage } from '../views/pages/errorPages';
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
    console.log(page);
  res.end(page);
};

export const getListJson = async (req, res) => {
  const params = req.params;
  const list = await getList(params);
  res.json(list);
};

export const getDetailsJson = async (req, res) => {
  const params = req.params;
  const details = await getDetails(params.id, params.lang);
  res.json(details);
};
