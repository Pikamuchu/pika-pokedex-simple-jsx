const pokemons = require('./data/pokemons.json')

export const getList = (params) => {
  return pokemons.slice(0, 20);
}

export const getDetails = (code) => {
  return pokemons.filter(pokemon => pokemon.code === code);
}
