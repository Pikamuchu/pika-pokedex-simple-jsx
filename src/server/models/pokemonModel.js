var Pokedex = require('pokedex-promise-v2');
var options = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
};
var P = new Pokedex(options);

export const getList = async params => {
  const itemList = await P.getPokemonsList({ limit: 20, offset: 0 });
  const pokemonList = await Promise.all(
    itemList.results.map(async item => {
      return await getItem(item.name, params.lang);
    })
  );
  return pokemonList.filter(pokemon => !pokemon.evolvesFromId);
};

export const getItem = async (id, lang) => {
  const pokemon = await P.getPokemonByName(id);
  return {
    id: id,
    code: formatCode(pokemon.id),
    name: pokemon.name,
    types: mapTypes(pokemon.types)
  };
};

export const getDetails = async (id, lang) => {
  const [pokemon, species] = await Promise.all([P.getPokemonByName(id), P.getPokemonSpeciesByName(id)]);
  return (
    pokemon && {
      id: pokemon.name,
      code: formatCode(pokemon.id),
      name: translateName(species.names, lang),
      types: mapTypes(pokemon.types),
      color: pokemon.color,
      evolvesFromId: species.evolves_from_species && species.evolves_from_species.name,
      abilities: pokemon.abilities && pokemon.abilities.map(item => item.ability.name),
      weight: pokemon.weight,
      height: pokemon.height,
      stats: mapStats(pokemon.stats),
      category: '',
      description: ''
    }
  );
};

const formatCode = code => code && code.toString().padStart(3, '0');

const translateName = (translations, lang) => {
  const translation = translations && translations.filter(item => item.language && item.language.name === lang);
  return translation && translation[0] && translation[0].name;
};

const mapTypes = types => {
  return (
    types &&
    types.map(item => {
      return { id: item.type.name, name: item.type.name };
    })
  );
};

const mapStats = stats => {
  return (
    stats &&
    stats.map(item => {
      return { name: item.stat.name, value: item.base_stat };
    })
  );
};
