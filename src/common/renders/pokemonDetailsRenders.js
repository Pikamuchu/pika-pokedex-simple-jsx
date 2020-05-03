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
