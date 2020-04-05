const labelsDefault = require('./data/labels_en.json');

const AVAILABLE_LOCALES = ['en', 'es'];

export const getLabels = req => {
  getList(req.acceptsLanguages('es', 'en'));
};

export const getList = locale => {
  return AVAILABLE_LOCALES.includes(locale) ? require(`./data/labels_${locale}.json`) : labelsDefault;
};
