export const pokemonListRender = (items, labels) => (
  <section class="section pokedex-results overflow-visible">
    <ul class="results" style="height: auto;">
      {items && items.map(item => pokemonListItemRender(item))}
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

export const pokemonListItemRender = item => (
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

export const pokemonDetailsRender = (details, labels) => (
  <section class="section pokedex-details">
    <div class="column-6 push-1">
      <div class="pokedex-profile">
        <div class="profile-images">
          <img
            class="active"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/{details.code}.png"
            alt="{details.name}"
          />
        </div>
      </div>
    </div>

    <div class="column-6 push-7">
      <div class="pokedex-details-right">
        <div class="version-descriptions active">
          <p class="version-x active">{details.description}</p>
        </div>

        <div class="info match-height-tablet">
          <div class="pokemon-ability-info color-bg color-yellow match active" style="min-height: 260px;">
            <div class="column-7">
              <ul>
                <li>
                  <span class="attribute-title">Categoría</span>
                  <span class="attribute-value">{details.category}</span>
                </li>

                <li>
                  <span class="attribute-title">Altura</span>
                  <span class="attribute-value">{details.height}</span>
                </li>

                <li>
                  <span class="attribute-title">Peso</span>
                  <span class="attribute-value">{details.weight}</span>
                </li>
              </ul>
            </div>

            <div class="column-7 push-7">{statsRender(details.stats)}</div>
          </div>

          <div class="pokedex-attributes active">
            <div class="dtm-type">
              <h3>Tipo</h3>
              <ul>
                {details.types.map(type => (
                  <li class="background-color-{type.id}">
                    <a href="/pokedex/?type={type.id}">{type.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div class="dtm-weaknesses">
              <h3>Debilidad</h3>
              <ul>
                <li class="background-color-fire first">
                  <a href="/es/pokedex/?weakness=fire">
                    <span>Fuego</span>
                  </a>
                </li>

                <li class="background-color-flying middle">
                  <a href="/es/pokedex/?weakness=flying">
                    <span>Volador</span>
                  </a>
                </li>

                <li class="background-color-ice last">
                  <a href="/es/pokedex/?weakness=ice">
                    <span>Hielo</span>
                  </a>
                </li>

                <li class="background-color-psychic first">
                  <a href="/es/pokedex/?weakness=psychic">
                    <span>Psíquico</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="collectibles-detail-friends" />
      </div>
    </div>
  </section>
);

const statsRender = stats => (
  <ul>
    <li>
      <span class="attribute-title">Stats</span>
      {stats.map(stat => (
        <span class="attribute-value">
          {stat.name}: {stat.value}
        </span>
      ))}
    </li>
  </ul>
);

export const pokemonListFiltersRender = filters => (
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

    <div class="simple-filters-wrapper">
      <ul class="simple-filters hidden-mobile">
        <li id="type" class="">
          <span class="filter">Tipo:</span>
          <span class="value">All</span>
          <span class="icon icon_multiply removeFilter" />
        </li>

        <li id="weakness" class="">
          <span class="filter">Debilidad:</span>
          <span class="value">All</span>
          <span class="icon icon_multiply removeFilter" />
        </li>

        <li id="ability" class="">
          <span class="filter">Habilidad:</span>
          <span class="value">All</span>
          <span class="icon icon_multiply removeFilter" />
        </li>

        <li id="height" class="">
          <span class="filter">Altura:</span>
          <span class="value">All</span>
          <span class="icon icon_multiply removeFilter" />
        </li>

        <li id="weight" class="">
          <span class="filter">Peso:</span>
          <span class="value">All</span>
          <span class="icon icon_multiply removeFilter" />
        </li>

        <li id="number" class="">
          <span class="filter">Secuencia:</span>
          <span class="value">All</span>
          <span class="icon icon_multiply removeFilter" />
        </li>
      </ul>
    </div>

    <div class="pokedex-filter-wrapper overflow-visible">
      <div class="pokedex-filter-wrapper__inner clear">
        <div class="column-7 push-1">
          <div class="content-block content-block-full">
            <h2 class="section-title no-padding">Tipo y debilidad</h2>

            <div class="filter-help">
              <span>
                <strong>T</strong> = Tipo
              </span>
              <span>
                <strong>D</strong> = Debilidad
              </span>
            </div>
          </div>

          <div class="content-block content-block-full">
            <ul class="pokedex-filter-tw-list">
              <li>
                <span class="pill background-color-bug">Bicho</span>
                <span data-type="type" data-value="bug" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="bug" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-dark">Siniestro</span>
                <span data-type="type" data-value="dark" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="dark" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>
            </ul>
          </div>

          <div class="content-block content-block-full">
            <div class="range-filter-wrapper">
              <h3 class="rangeTitle">Secuencia</h3>
              <div id="range-boxes" data-type="number">
                <input id="minRangeBox" type="text" class="range-box button-white tt-query" value="1" />
                <span style="padding: 0 10px;">-</span>
                <input id="maxRangeBox" type="text" value="890" class="range-box button-white tt-query" />
              </div>
              <p class="rangeValues" style="display: none;">
                <span id="min">1</span> - <span id="max">890</span>
              </p>
            </div>
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
            <h3 class="section-title pokedex-filter-title">Altura</h3>

            <ul class="pokedex-filter-height-list height" data-type="height">
              <li class="size " data-value="short" data-type="height">
                <span class="icon icon_filter_height_small" />
                <span class="offscreen">short</span>
              </li>

              <li class="size  middle" data-value="medium" data-type="height">
                <span class="icon icon_filter_height_medium" />
                <span class="offscreen">medium</span>
              </li>

              <li class="size " data-value="tall" data-type="height">
                <span class="icon icon_filter_height_large" />
                <span class="offscreen">tall</span>
              </li>
            </ul>
          </div>

          <div class="content-block content-block-full">
            <h3 class="section-title pokedex-filter-title">Peso</h3>

            <ul class="pokedex-filter-weight-list weight" data-type="weight">
              <li class="size" data-value="light" data-type="weight">
                <span class="icon icon_filter_weight_small" />
                <span class="offscreen">light</span>
              </li>

              <li class="size middle" data-value="medium" data-type="weight">
                <span class="icon icon_filter_weight_medium" />
                <span class="offscreen">medium</span>
              </li>

              <li class="size" data-value="heavy" data-type="weight">
                <span class="icon icon_filter_weight_large" />
                <span class="offscreen">heavy</span>
              </li>
            </ul>
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
