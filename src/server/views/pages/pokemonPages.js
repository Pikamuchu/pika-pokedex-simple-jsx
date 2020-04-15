const { mainLayout } = require('../mainLayout');
const { headerRender } = require('../../../common/renders/pokedexRenders');
const { pokemonListRender, pokemonDetailsRender } = require('../../../common/renders/pokemonRenders');

export const listPage = (list, labels) =>
  mainLayout(
    <div class="container pokedex">
      {headerRender('Pokedex - Pokemons')}
      <pokemon-list src="/api/pokemons">
        {pokemonListRender(list, labels, true)}
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
