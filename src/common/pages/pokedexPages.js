const { mainLayout } = require('./mainLayout');
const { filtersRender, resultsRender, detailsRender } = require('../renders/pokedexRenders');

export const mainPage = (results, labels) =>
  mainLayout(
    <div class="container pokedex">
      <section class="section pokedex-header overflow-visible">
        <div class="column-6 push-1">
          <h1 class="section-title no-margin no-padding">Pokédex</h1>
        </div>

        <div class="column-6 push-7"></div>
      </section>

      {filtersRender()}

      <section class="section pokedex-filter-toggle">
        <div class="filter-toggle-span">
          <span>
            <b class="text">Mostrar búsqueda avanzada</b>
            <i class="icon icon_arrow_sm_down hidden-mobile" />
          </span>
        </div>
      </section>

      <section class="section overflow-visible">
        <div class="column-12 push-1">
          <a id="shuffle" class="button button-lightblue no-arrow">
            <i class="icon icon_refresh" />
            ¡Sorpréndeme!
          </a>

          <div class="custom-select-wrapper" style="visibility: visible;">
            <select id="sortOrder" style="display: none;">
              <option value="noSort">Ordenar por…</option>
              <option selected="" value="numberAsc">
                Número inferior
              </option>
              <option value="numberDesc">Número superior</option>
              <option value="nameAsc">A-Z</option>
              <option value="nameDesc">Z-A</option>
            </select>
            <div class="custom-select-menu" tabindex="0">
              <label class="styled-select button-black icon icon_pokeball">Número inferior</label>
              <ul data-select-name="undefined" style="display: none;">
                <li data-option-value="noSort" class="">
                  Ordenar por…
                </li>
                <li data-option-value="numberAsc" class="selected">
                  Número inferior
                </li>
                <li data-option-value="numberDesc" class="">
                  Número superior
                </li>
                <li data-option-value="nameAsc" class="">
                  A-Z
                </li>
                <li data-option-value="nameDesc" class="">
                  Z-A
                </li>
              </ul>
              <input type="hidden" name="undefined" value="numberAsc" />
            </div>
            <i class="icon icon_arrow_sm_down" />
          </div>
        </div>
      </section>

      {resultsRender()}

      {detailsRender()}
    </div>
  );

export const gridPage = (results, labels) =>
  mainLayout(
    <div class="container pokedex">
      <section class="section pokedex-header overflow-visible">
        <div class="column-6 push-1">
          <h1 class="section-title no-margin no-padding">Pokédex</h1>
        </div>

        <div class="column-6 push-7"></div>
      </section>

      {resultsRender(results, labels)}
    </div>
  );

export const detailsPage = (details, labels) =>
  mainLayout(<div class="container pokedex">{detailsRender(details, labels)}</div>);
