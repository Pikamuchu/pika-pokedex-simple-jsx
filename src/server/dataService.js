const pokemonData = require('./data/pokemonData.json')

export const getGridData = (req) => {
  return pokemonData.slice(0, 20);
}

export const getDetailData = (req) => {
  return pokemonData.filter(pokemon => pokemon.code === 'bulbasaur');
}
