const labelsDefault = require('./labels/default.json');

const AVAILABLE_LOCALES = ['es'];

export default locale => {
  return AVAILABLE_LOCALES.includes(locale) ? require(`./labels/${locale}.json`) : labelsDefault;
};
