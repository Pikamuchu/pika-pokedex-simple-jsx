const { mainLayout } = require('../mainLayout');
const { headerRender } = require('../../../common/renders/pokedexRenders');
const { pokemonListRender } = require('../../../common/renders/pokemonListRenders');
const { pokemonDetailsRender } = require('../../../common/renders/pokemonDetailsRenders');

export const listPage = (list, labels) =>
  mainLayout(
    <div class="container pokedex">
      {headerRender('Pokedex - Pokemons')}
      <pokemon-list src="/api/pokemons">
        {pokemonListRender(list, labels)}
      </pokemon-list>
    </div>
  );

export const detailsPage = (details, labels) =>
  mainLayout(
    <div class="container pokedex">
      {headerRender(`Pokedex - Pokemons - ${details.name}`)}
      {pokemonDetailsRender(details, labels)}
    </div>
  );
