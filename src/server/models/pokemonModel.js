import { listenerCount } from 'cluster';

const oakdexPokedex = require('oakdex-pokedex');

export const getList = (params, lang) => {
  var list = oakdexPokedex.allPokemon()
  .filter(pokemon => !pokemon.evolution_from)
  .map(pokemon => {
    return {
      id: pokemon.names.en,
      code: pokemon.national_id.toString().padStart(3, "0"),
      name: pokemon.names[lang],
      type: pokemon.types,
      color: pokemon.color
    };
  });
  return list;
};

export const getDetails = (id, lang) => {
  const pokemon = oakdexPokedex.findPokemon(id);
  return pokemon && {
    abilities: pokemon.abilities.map(item => item.name),
    weight: pokemon.weight_eu,
    code: pokemon.national_id.toString().padStart(3, "0"),
    height: pokemon.height_eu,
    name: pokemon.names[lang],
    id: pokemon.names.en,
    type: pokemon.types,
    color: pokemon.color
  };
};
