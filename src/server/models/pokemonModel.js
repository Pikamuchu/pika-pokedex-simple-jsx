import { listenerCount } from 'cluster';

const oakdexPokedex = require('oakdex-pokedex');

export const getList = (params) => {
  var list = oakdexPokedex.allPokemon()
  .filter(pokemon => !pokemon.evolution_from)
  .map(pokemon => {
    return {
      id: formatId(pokemon.names.en),
      code: formatCode(pokemon.national_id),
      name: translate(pokemon.names, params.lang),
      types: pokemon.types,
      color: pokemon.color
    };
  });
  return list;
};

export const getDetails = (id, lang) => {
  const pokemon = oakdexPokedex.findPokemon(parseId(id));
  return pokemon && {
    id: formatId(pokemon.names.en),
    code: formatCode(pokemon.national_id),
    name: translate(pokemon.names, lang),
    types: pokemon.types,
    color: pokemon.color,
    abilities: pokemon.abilities.map(item => item.name),
    weight: pokemon.weight_eu,
    height: pokemon.height_eu,
    stats: pokemon.base_stats,
    category: translate(pokemon.categories, lang),
    description: translate(pokemon.pokedex_entries.X, lang)
  };
};

const parseId = id => id && (id.charAt(0).toUpperCase() + id.slice(1));

const formatId = id => id && id.toLowerCase();

const formatCode = code => code && code.toString().padStart(3, "0");

const translate = (prop, lang) => prop && (prop[lang] || prop.en);
