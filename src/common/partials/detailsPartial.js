export default details => (
  <section class="section pokedex-details">
    <div class="column-6 push-1">
      <div class="pokedex-profile">
        <div class="profile-images">
          <img class="active" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="Bulbasaur" />
        </div>
      </div>
    </div>

    <div class="column-6 push-7">
      <div class="pokedex-details-right">
        <div class="version-descriptions active">
          <p class="version-x">
            A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada
            vez más a medida que absorbe los rayos del sol.
          </p>

          <p class="version-y active">
            A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada
            vez más a medida que absorbe los rayos del sol.
          </p>
        </div>

        <h3>Versiones:</h3>
        <div class="version-labels">
          <span class="version-label version-y active ">
            <i class="icon icon_pokeball" />
          </span>
          <span class="version-label version-x ">
            <i class="icon icon_pokeball" />
          </span>
        </div>

        <div class="info match-height-tablet">
          <div class="pokemon-ability-info color-bg color-lightblue match active" style="min-height: 225px;">
            <div class="column-7">
              <ul>
                <li>
                  <span class="attribute-title">Altura</span>
                  <span class="attribute-value">0,7 m</span>
                </li>

                <li>
                  <span class="attribute-title">Peso</span>
                  <span class="attribute-value">6,9 kg</span>
                </li>

                <li>
                  <span class="attribute-title">Sexo</span>

                  <span class="attribute-value">
                    <i class="icon icon_male_symbol" />
                    <i class="icon icon_female_symbol" />
                  </span>
                </li>
              </ul>
            </div>

            <div class="column-7 push-7">
              <ul>
                <li>
                  <span class="attribute-title">Categoría</span>
                  <span class="attribute-value">Semilla</span>
                </li>

                <li>
                  <span class="attribute-title">Habilidad</span>

                  <ul class="attribute-list">
                    <li>
                      <a href="" class="moreInfo">
                        <span class="attribute-value">Espesura</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div class="pokemon-ability-info-detail match" style="min-height: 225px;">
              <span class="button-close">
                <i class="icon icon_multiply" />
                Cerrar
              </span>
              <span class="title">Información sobre habilidad</span>
              <h3>Espesura</h3>
              <p>Potencia los ataques de tipo Planta en un apuro.</p>
            </div>
          </div>

          <div class="pokedex-attributes active">
            <div class="dtm-type">
              <h3>Tipo</h3>
              <ul>
                <li class="background-color-grass">
                  <a href="/es/pokedex/?type=grass">Planta</a>
                </li>

                <li class="background-color-poison middle">
                  <a href="/es/pokedex/?type=poison">Veneno</a>
                </li>
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
