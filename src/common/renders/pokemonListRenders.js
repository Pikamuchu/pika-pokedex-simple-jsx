export const pokemonListRender = (list, labels) => (
  <JSX.fragment>
    <pokemon-list-items>{pokemonListItemsRender(list.items, labels)}</pokemon-list-items>
  </JSX.fragment>
);
/*<pokemon-list-filters>{pokemonListFiltersRender(list.filters, labels)}</pokemon-list-filters>*/

export const pokemonListItemsRender = (items, labels) => (
  <section class="section pokedex-results overflow-visible">
    <ul class="results" style="height: auto;">
      {items && items.map(item => <pokemon-tile item-id="{item.id}">{pokemonTileRender(item, labels)}</pokemon-tile>)}
    </ul>

    <div class="no-results column-12 push-1">
      <div class="alert alert-error">
        <h3>No hay ningún Pokémon que coincida con tu búsqueda.</h3>
        <p>Intenta lo siguiente para encontrar resultados:</p>
        <ul>
          <li>Reduce el número de parámetros de búsqueda.</li>
          <li>Haz búsquedas de tipos de Pokémon de uno en uno.</li>
          <li>Intenta buscar con más de un tamaño y forma.</li>
        </ul>
      </div>
    </div>

    <div class="content-block content-block-full">
      <button id="loadMore" style="display: inline-block;">
        <span class="button-lightblue">Cargar más Pokémon</span>
      </button>
    </div>
  </section>
);

export const pokemonTileRender = (item, labels) => (
  <li class="animating" style="opacity: 1; top: 0px; left: 0px; transform: matrix(1, 0, 0, 1, 0, 0);">
    <figure>
      <a href="/pokemons/{item.id}">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{item.code}.png" />
      </a>
    </figure>

    <div class="pokemon-info">
      <p class="id">
        <span class="number-prefix">N.º </span>
        {item.code}
      </p>
      <h5>{item.name}</h5>

      {item.types &&
        item.types.map(type => (
          <div class="abilities">
            <span class="pill background-color-{type.id}">{type.name}</span>
          </div>
        ))}
    </div>
  </li>
);

export const pokemonListFiltersRender = (filters, labels) => (
  <section class="pokedex-filter">
    <div class="pokedex-filter-header">
      <div>
        <div class="column-6 push-1">
          <div class="filter-text-search">
            <label>Nombre o número</label>
            <span class="twitter-typeahead" style="position: relative; display: inline-block;">
              <input
                data-type="name"
                type="text"
                class="button-white tt-hint"
                readonly=""
                autocomplete="off"
                spellcheck="false"
                tabindex="-1"
                dir="ltr"
                style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);"
              />
              <input
                data-type="name"
                type="text"
                id="searchInput"
                class="button-white tt-input"
                autocomplete="off"
                spellcheck="false"
                dir="auto"
                style="position: relative; vertical-align: top; background-color: transparent;"
              />
              <pre
                aria-hidden="true"
                style="position: absolute; visibility: hidden; white-space: pre; font-family: Roboto, arial, sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 8px; text-rendering: auto; text-transform: none;"
              />
              <div class="tt-menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;">
                <div class="tt-dataset tt-dataset-0" />
              </div>
            </span>
            <input type="submit" class="button button-search" value="Buscar" id="search" />
          </div>
          <p class="subtitle">
            ¡Usa la búsqueda avanzada para encontrar Pokémon por su tipo, debilidad, habilidad y demás datos!
          </p>
        </div>
        <div class="column-6 push-7"></div>
      </div>
    </div>

    <div class="pokedex-filter-wrapper overflow-visible">
      <div class="pokedex-filter-wrapper__inner clear">
        <div class="column-7 push-1">
          <div class="content-block content-block-full">
            <h2 class="section-title no-padding">Tipo</h2>
          </div>

          <div class="content-block content-block-full">
            <ul class="pokedex-filter-tw-list">
              <li>
                <span class="pill background-color-bug">Bicho</span>
                <span data-type="type" data-value="bug" class="filter type-filter toggle type">
                  T
                </span>
              </li>

              <li>
                <span class="pill background-color-dark">Siniestro</span>
                <span data-type="type" data-value="dark" class="filter type-filter toggle type">
                  T
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="column-5 push-8">
          <div class="content-block content-block-full abilities-filter">
            <h3 class="section-title pokedex-filter-title">Habilidad</h3>

            <div class="custom-select-wrapper" style="visibility: visible;">
              <select id="abilities" data-type="abilities" data-height="300" style="display: none;">
                <option value="All">Todas</option>

                <option value="Absorbe Agua">Absorbe Agua</option>

                <option value="Absorbe Elec">Absorbe Elec</option>

                <option value="...">...</option>
              </select>
              <div class="custom-select-menu" tabindex="0">
                <label class="styled-select button-black icon icon_pokeball">Todas</label>
                <div class="custom-scrollbar custom-select-scrollbar" style="height: 300px; display: none;">
                  <div class="viewport">
                    <ul data-select-name="undefined" class="overview">
                      <li data-option-value="All" class="selected">
                        Todas
                      </li>
                      <li data-option-value="Absorbe Agua" class="">
                        Absorbe Agua
                      </li>
                      <li data-option-value="Absorbe Elec" class="">
                        Absorbe Elec
                      </li>
                    </ul>
                  </div>
                </div>
                <input type="hidden" name="undefined" value="All" />
              </div>
              <i class="icon icon_arrow_sm_down" />
            </div>
          </div>

          <div class="content-block content-block-full">
            <div class="filter-action">
              <a class="button button-orange no-arrow" id="search">
                <i class="icon icon_search" />
                Buscar
              </a>
              <a class="button button-gray no-arrow" id="reset">
                Restablecer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
