export const headerRender = title => (
  <section class="section pokedex-header overflow-visible">
    <div class="column-6 push-1">
      <h1 class="section-title no-margin no-padding">{title}</h1>
    </div>

    <div class="column-6 push-7"></div>
  </section>
);

export const resultsRender = (results, labels) => (
  <section class="section pokedex-results overflow-visible">
    <ul class="results" style="height: auto;">
      {results.map(result => resultTileRender(result))}
    </ul>

    <div class="no-results column-12 push-1">
      <div class="alert alert-error">
        <h3>No　hay ningún Pokémon que coincida con tu búsqueda.</h3>
        <p>Intenta lo siguiente para encontrar resultados:</p>
        <ul>
          <li>Reduce el número de parámetros de búsqueda.</li>
          <li>Haz búsquedas de tipos de Pokémon de uno en uno.</li>
          <li>Intenta buscar con más de un tamaño y forma.</li>
        </ul>
      </div>
    </div>

    <div class="content-block content-block-full">
      <a href="" id="loadMore" style="display: inline-block;">
        <span class="button-lightblue">Cargar más Pokémon</span>
      </a>
    </div>
  </section>
);

export const resultTileRender = result => (
  <li class="animating" style="opacity: 1; top: 0px; left: 0px; transform: matrix(1, 0, 0, 1, 0, 0);">
    <figure>
      <a href="/pokedex/{result.id}">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{result.code}.png" />
      </a>
    </figure>

    <div class="pokemon-info">
      <p class="id">
        <span class="number-prefix">N.º </span>
        {result.code}
      </p>
      <h5>{result.name}</h5>

      {result.types && result.types.map(type => (
        <div class="abilities">
          <span class="pill background-color-{type.id}">{type.name}</span>
        </div>
      ))}
    </div>
  </li>
);

export const detailsRender = (details, labels) => (
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

export const filtersRender = results => (
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

              <li>
                <span class="pill background-color-dragon">Dragón</span>
                <span data-type="type" data-value="dragon" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="dragon" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-electric">Eléctrico</span>
                <span data-type="type" data-value="electric" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="electric" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-fairy">Hada</span>
                <span data-type="type" data-value="fairy" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="fairy" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-fighting">Lucha</span>
                <span data-type="type" data-value="fighting" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="fighting" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-fire">Fuego</span>
                <span data-type="type" data-value="fire" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="fire" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-flying">Volador</span>
                <span data-type="type" data-value="flying" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="flying" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-ghost">Fantasma</span>
                <span data-type="type" data-value="ghost" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="ghost" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-grass">Planta</span>
                <span data-type="type" data-value="grass" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="grass" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-ground">Tierra</span>
                <span data-type="type" data-value="ground" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="ground" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-ice">Hielo</span>
                <span data-type="type" data-value="ice" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="ice" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-normal">Normal</span>
                <span data-type="type" data-value="normal" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="normal" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-poison">Veneno</span>
                <span data-type="type" data-value="poison" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="poison" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-psychic">Psíquico</span>
                <span data-type="type" data-value="psychic" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="psychic" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-rock">Roca</span>
                <span data-type="type" data-value="rock" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="rock" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-steel">Acero</span>
                <span data-type="type" data-value="steel" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="steel" class="filter weakness-filter toggle weakness">
                  D
                </span>
              </li>

              <li>
                <span class="pill background-color-water">Agua</span>
                <span data-type="type" data-value="water" class="filter type-filter toggle type">
                  T
                </span>
                <span data-type="weakness" data-value="water" class="filter weakness-filter toggle weakness">
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

                <option value="Absorbe Fuego">Absorbe Fuego</option>

                <option value="Acero Templado">Acero Templado</option>

                <option value="Aclimatación">Aclimatación</option>

                <option value="Acérrimo">Acérrimo</option>

                <option value="Adaptable">Adaptable</option>

                <option value="Afortunado">Afortunado</option>

                <option value="Agallas">Agallas</option>

                <option value="Agrupamiento">Agrupamiento</option>

                <option value="Alas Vendaval">Alas Vendaval</option>

                <option value="Alerta">Alerta</option>

                <option value="Allanamiento">Allanamiento</option>

                <option value="Alma Acerada">Alma Acerada</option>

                <option value="Alma Cura">Alma Cura</option>

                <option value="Alma Errante">Alma Errante</option>

                <option value="Amor Filial">Amor Filial</option>

                <option value="Antibalas">Antibalas</option>

                <option value="Antibarrera">Antibarrera</option>

                <option value="Anticipación">Anticipación</option>

                <option value="Antídoto">Antídoto</option>

                <option value="Armadura Batalla">Armadura Batalla</option>

                <option value="Armadura Frágil">Armadura Frágil</option>

                <option value="Armadura Prisma">Armadura Prisma</option>

                <option value="Audaz">Audaz</option>

                <option value="Aura Feérica">Aura Feérica</option>

                <option value="Aura Oscura">Aura Oscura</option>

                <option value="Ausente">Ausente</option>

                <option value="Autoestima">Autoestima</option>

                <option value="Baba">Baba</option>

                <option value="Banco">Banco</option>

                <option value="Batería">Batería</option>

                <option value="Bromista">Bromista</option>

                <option value="Bucle Aire">Bucle Aire</option>

                <option value="Cabeza Roca">Cabeza Roca</option>

                <option value="Cacheo">Cacheo</option>

                <option value="Cambio Color">Cambio Color</option>

                <option value="Cambio Táctico">Cambio Táctico</option>

                <option value="Caparazón">Caparazón</option>

                <option value="Cara de Hielo">Cara de Hielo</option>

                <option value="Carrillo">Carrillo</option>

                <option value="Chorro Arena">Chorro Arena</option>

                <option value="Clorofila">Clorofila</option>

                <option value="Cobardía">Cobardía</option>

                <option value="Cola Surf">Cola Surf</option>

                <option value="Colector">Colector</option>

                <option value="Combustible">Combustible</option>

                <option value="Compensación">Compensación</option>

                <option value="Competitivo">Competitivo</option>

                <option value="Compiescolta">Compiescolta</option>

                <option value="Coraza Reflejo">Coraza Reflejo</option>

                <option value="Corrosión">Corrosión</option>

                <option value="Corte Fuerte">Corte Fuerte</option>

                <option value="Coránima">Coránima</option>

                <option value="Cosecha">Cosecha</option>

                <option value="Cromolente">Cromolente</option>

                <option value="Cuerpo Llama">Cuerpo Llama</option>

                <option value="Cuerpo Maldito">Cuerpo Maldito</option>

                <option value="Cuerpo Mortal">Cuerpo Mortal</option>

                <option value="Cuerpo Puro">Cuerpo Puro</option>

                <option value="Cuerpo Vívido">Cuerpo Vívido</option>

                <option value="Cura Lluvia">Cura Lluvia</option>

                <option value="Cura Natural">Cura Natural</option>

                <option value="Cálculo Final">Cálculo Final</option>

                <option value="Cólera">Cólera</option>

                <option value="Defensa Hoja">Defensa Hoja</option>

                <option value="Descarga">Descarga</option>

                <option value="Despiste">Despiste</option>

                <option value="Dicha">Dicha</option>

                <option value="Disfraz">Disfraz</option>

                <option value="Don Floral">Don Floral</option>

                <option value="Efecto Espora">Efecto Espora</option>

                <option value="Elec. Estática">Elec. Estática</option>

                <option value="Electrogénesis">Electrogénesis</option>

                <option value="Electromotor">Electromotor</option>

                <option value="Encadenado">Encadenado</option>

                <option value="Energía Pura">Energía Pura</option>

                <option value="Enjambre">Enjambre</option>

                <option value="Ensañamiento">Ensañamiento</option>

                <option value="Entusiasmo">Entusiasmo</option>

                <option value="Escama Especial">Escama Especial</option>

                <option value="Escama de Hielo">Escama de Hielo</option>

                <option value="Escudo Limitado">Escudo Limitado</option>

                <option value="Escudo Magma">Escudo Magma</option>

                <option value="Escudo Recio">Escudo Recio</option>

                <option value="Espada Indómita">Espada Indómita</option>

                <option value="Espejo Mágico">Espejo Mágico</option>

                <option value="Espesura">Espesura</option>

                <option value="Espíritu Vital">Espíritu Vital</option>

                <option value="Experto">Experto</option>

                <option value="Expulsarena">Expulsarena</option>

                <option value="Filtro">Filtro</option>

                <option value="Firmeza">Firmeza</option>

                <option value="Flaqueza">Flaqueza</option>

                <option value="Flexibilidad">Flexibilidad</option>

                <option value="Foco Interno">Foco Interno</option>

                <option value="Francotirador">Francotirador</option>

                <option value="Fuente Energía">Fuente Energía</option>

                <option value="Fuerte Afecto">Fuerte Afecto</option>

                <option value="Fuerza Cerebral">Fuerza Cerebral</option>

                <option value="Fuga">Fuga</option>

                <option value="Funda">Funda</option>

                <option value="Garra Dura">Garra Dura</option>

                <option value="Gas Reactivo">Gas Reactivo</option>

                <option value="Gran Encanto">Gran Encanto</option>

                <option value="Guardia Espectro">Guardia Espectro</option>

                <option value="Guardia Metálica">Guardia Metálica</option>

                <option value="Gula">Gula</option>

                <option value="Gélido">Gélido</option>

                <option value="Hedor">Hedor</option>

                <option value="Herbogénesis">Herbogénesis</option>

                <option value="Herbívoro">Herbívoro</option>

                <option value="Hidratación">Hidratación</option>

                <option value="Hidrorrefuerzo">Hidrorrefuerzo</option>

                <option value="Huida">Huida</option>

                <option value="Humedad">Humedad</option>

                <option value="Humo Blanco">Humo Blanco</option>

                <option value="Hurto">Hurto</option>

                <option value="Hélice Caudal">Hélice Caudal</option>

                <option value="Ignorante">Ignorante</option>

                <option value="Ignífugo">Ignífugo</option>

                <option value="Iluminación">Iluminación</option>

                <option value="Ilusión">Ilusión</option>

                <option value="Impasible">Impasible</option>

                <option value="Impostor">Impostor</option>

                <option value="Impulso">Impulso</option>

                <option value="Imán">Imán</option>

                <option value="Indefenso">Indefenso</option>

                <option value="Inicio Lento">Inicio Lento</option>

                <option value="Inmunidad">Inmunidad</option>

                <option value="Insomnio">Insomnio</option>

                <option value="Insonorizar">Insonorizar</option>

                <option value="Intimidación">Intimidación</option>

                <option value="Intrépido">Intrépido</option>

                <option value="Irascible">Irascible</option>

                <option value="Justiciero">Justiciero</option>

                <option value="Letargo Perenne">Letargo Perenne</option>

                <option value="Levitación">Levitación</option>

                <option value="Liviano">Liviano</option>

                <option value="Llovizna">Llovizna</option>

                <option value="Lodo Líquido">Lodo Líquido</option>

                <option value="Líbero">Líbero</option>

                <option value="Madrugar">Madrugar</option>

                <option value="Maduración">Maduración</option>

                <option value="Mal Sueño">Mal Sueño</option>

                <option value="Mandíbula Fuerte">Mandíbula Fuerte</option>

                <option value="Manto Frondoso">Manto Frondoso</option>

                <option value="Manto Níveo">Manto Níveo</option>

                <option value="Mar Llamas">Mar Llamas</option>

                <option value="Mar del Albor">Mar del Albor</option>

                <option value="Megadisparador">Megadisparador</option>

                <option value="Menos">Menos</option>

                <option value="Metal Liviano">Metal Liviano</option>

                <option value="Metal Pesado">Metal Pesado</option>

                <option value="Mimetismo">Mimetismo</option>

                <option value="Modo Daruma">Modo Daruma</option>

                <option value="Momia">Momia</option>

                <option value="Monotema">Monotema</option>

                <option value="Mudar">Mudar</option>

                <option value="Multitipo">Multitipo</option>

                <option value="Muro Mágico">Muro Mágico</option>

                <option value="Mutapetito">Mutapetito</option>

                <option value="Mutatipo">Mutatipo</option>

                <option value="Más">Más</option>

                <option value="Nado Rápido">Nado Rápido</option>

                <option value="Nebulogénesis">Nebulogénesis</option>

                <option value="Nerviosismo">Nerviosismo</option>

                <option value="Nevada">Nevada</option>

                <option value="Normalidad">Normalidad</option>

                <option value="Ojo Compuesto">Ojo Compuesto</option>

                <option value="Pararrayos">Pararrayos</option>

                <option value="Pareja de Baile">Pareja de Baile</option>

                <option value="Pelaje Recio">Pelaje Recio</option>

                <option value="Peluche">Peluche</option>

                <option value="Pelusa">Pelusa</option>

                <option value="Piel Celeste">Piel Celeste</option>

                <option value="Piel Eléctrica">Piel Eléctrica</option>

                <option value="Piel Feérica">Piel Feérica</option>

                <option value="Piel Helada">Piel Helada</option>

                <option value="Piel Milagro">Piel Milagro</option>

                <option value="Piel Seca">Piel Seca</option>

                <option value="Piel Tosca">Piel Tosca</option>

                <option value="Pies Rápidos">Pies Rápidos</option>

                <option value="Poder Arena">Poder Arena</option>

                <option value="Poder Solar">Poder Solar</option>

                <option value="Polvo Escudo">Polvo Escudo</option>

                <option value="Pompa">Pompa</option>

                <option value="Potencia">Potencia</option>

                <option value="Potencia Bruta">Potencia Bruta</option>

                <option value="Predicción">Predicción</option>

                <option value="Presión">Presión</option>

                <option value="Prestidigitador">Prestidigitador</option>

                <option value="Primer Auxilio">Primer Auxilio</option>

                <option value="Psicogénesis">Psicogénesis</option>

                <option value="Punk Rock">Punk Rock</option>

                <option value="Punta Acero">Punta Acero</option>

                <option value="Punto Tóxico">Punto Tóxico</option>

                <option value="Puño Férreo">Puño Férreo</option>

                <option value="Quitanieves">Quitanieves</option>

                <option value="Rastro">Rastro</option>

                <option value="Reacción Química">Reacción Química</option>

                <option value="Receptor">Receptor</option>

                <option value="Recogebolas">Recogebolas</option>

                <option value="Recogemiel">Recogemiel</option>

                <option value="Recogida">Recogida</option>

                <option value="Regeneración">Regeneración</option>

                <option value="Regia Presencia">Regia Presencia</option>

                <option value="Remoto">Remoto</option>

                <option value="Respondón">Respondón</option>

                <option value="Resquicio">Resquicio</option>

                <option value="Retirada">Retirada</option>

                <option value="Revés">Revés</option>

                <option value="Rezagado">Rezagado</option>

                <option value="Ritmo Propio">Ritmo Propio</option>

                <option value="Rivalidad">Rivalidad</option>

                <option value="Rizos Rebeldes">Rizos Rebeldes</option>

                <option value="Robustez">Robustez</option>

                <option value="Roca Sólida">Roca Sólida</option>

                <option value="Rompeaura">Rompeaura</option>

                <option value="Rompemoldes">Rompemoldes</option>

                <option value="Ráfaga Delta">Ráfaga Delta</option>

                <option value="Sacapecho">Sacapecho</option>

                <option value="Sebo">Sebo</option>

                <option value="Sequía">Sequía</option>

                <option value="Simbiosis">Simbiosis</option>

                <option value="Simple">Simple</option>

                <option value="Sincronía">Sincronía</option>

                <option value="Sistema Alfa">Sistema Alfa</option>

                <option value="Sombra Trampa">Sombra Trampa</option>

                <option value="Superguarda">Superguarda</option>

                <option value="Telepatía">Telepatía</option>

                <option value="Tenacidad">Tenacidad</option>

                <option value="Terravoltaje">Terravoltaje</option>

                <option value="Tierra del Ocaso">Tierra del Ocaso</option>

                <option value="Tinovictoria">Tinovictoria</option>

                <option value="Toque Tóxico">Toque Tóxico</option>

                <option value="Torrente">Torrente</option>

                <option value="Tragamisil">Tragamisil</option>

                <option value="Trampa Arena">Trampa Arena</option>

                <option value="Tumbos">Tumbos</option>

                <option value="Turbollama">Turbollama</option>

                <option value="Ultraimpulso">Ultraimpulso</option>

                <option value="Veleta">Veleta</option>

                <option value="Velo Agua">Velo Agua</option>

                <option value="Velo Arena">Velo Arena</option>

                <option value="Velo Aroma">Velo Aroma</option>

                <option value="Velo Dulce">Velo Dulce</option>

                <option value="Velo Flor">Velo Flor</option>

                <option value="Velo Pastel">Velo Pastel</option>

                <option value="Ventosas">Ventosas</option>

                <option value="Vigilante">Vigilante</option>

                <option value="Viscosidad">Viscosidad</option>

                <option value="Vista Lince">Vista Lince</option>

                <option value="Voz Fluida">Voz Fluida</option>

                <option value="Zoquete">Zoquete</option>

                <option value="Ímpetu Ardiente">Ímpetu Ardiente</option>

                <option value="Ímpetu Arena">Ímpetu Arena</option>

                <option value="Ímpetu Tóxico">Ímpetu Tóxico</option>
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
                      <li data-option-value="Absorbe Fuego" class="">
                        Absorbe Fuego
                      </li>
                      <li data-option-value="Acero Templado" class="">
                        Acero Templado
                      </li>
                      <li data-option-value="Aclimatación" class="">
                        Aclimatación
                      </li>
                      <li data-option-value="Acérrimo" class="">
                        Acérrimo
                      </li>
                      <li data-option-value="Adaptable" class="">
                        Adaptable
                      </li>
                      <li data-option-value="Afortunado" class="">
                        Afortunado
                      </li>
                      <li data-option-value="Agallas" class="">
                        Agallas
                      </li>
                      <li data-option-value="Agrupamiento" class="">
                        Agrupamiento
                      </li>
                      <li data-option-value="Alas Vendaval" class="">
                        Alas Vendaval
                      </li>
                      <li data-option-value="Alerta" class="">
                        Alerta
                      </li>
                      <li data-option-value="Allanamiento" class="">
                        Allanamiento
                      </li>
                      <li data-option-value="Alma Acerada" class="">
                        Alma Acerada
                      </li>
                      <li data-option-value="Alma Cura" class="">
                        Alma Cura
                      </li>
                      <li data-option-value="Alma Errante" class="">
                        Alma Errante
                      </li>
                      <li data-option-value="Amor Filial" class="">
                        Amor Filial
                      </li>
                      <li data-option-value="Antibalas" class="">
                        Antibalas
                      </li>
                      <li data-option-value="Antibarrera" class="">
                        Antibarrera
                      </li>
                      <li data-option-value="Anticipación" class="">
                        Anticipación
                      </li>
                      <li data-option-value="Antídoto" class="">
                        Antídoto
                      </li>
                      <li data-option-value="Armadura Batalla" class="">
                        Armadura Batalla
                      </li>
                      <li data-option-value="Armadura Frágil" class="">
                        Armadura Frágil
                      </li>
                      <li data-option-value="Armadura Prisma" class="">
                        Armadura Prisma
                      </li>
                      <li data-option-value="Audaz" class="">
                        Audaz
                      </li>
                      <li data-option-value="Aura Feérica" class="">
                        Aura Feérica
                      </li>
                      <li data-option-value="Aura Oscura" class="">
                        Aura Oscura
                      </li>
                      <li data-option-value="Ausente" class="">
                        Ausente
                      </li>
                      <li data-option-value="Autoestima" class="">
                        Autoestima
                      </li>
                      <li data-option-value="Baba" class="">
                        Baba
                      </li>
                      <li data-option-value="Banco" class="">
                        Banco
                      </li>
                      <li data-option-value="Batería" class="">
                        Batería
                      </li>
                      <li data-option-value="Bromista" class="">
                        Bromista
                      </li>
                      <li data-option-value="Bucle Aire" class="">
                        Bucle Aire
                      </li>
                      <li data-option-value="Cabeza Roca" class="">
                        Cabeza Roca
                      </li>
                      <li data-option-value="Cacheo" class="">
                        Cacheo
                      </li>
                      <li data-option-value="Cambio Color" class="">
                        Cambio Color
                      </li>
                      <li data-option-value="Cambio Táctico" class="">
                        Cambio Táctico
                      </li>
                      <li data-option-value="Caparazón" class="">
                        Caparazón
                      </li>
                      <li data-option-value="Cara de Hielo" class="">
                        Cara de Hielo
                      </li>
                      <li data-option-value="Carrillo" class="">
                        Carrillo
                      </li>
                      <li data-option-value="Chorro Arena" class="">
                        Chorro Arena
                      </li>
                      <li data-option-value="Clorofila" class="">
                        Clorofila
                      </li>
                      <li data-option-value="Cobardía" class="">
                        Cobardía
                      </li>
                      <li data-option-value="Cola Surf" class="">
                        Cola Surf
                      </li>
                      <li data-option-value="Colector" class="">
                        Colector
                      </li>
                      <li data-option-value="Combustible" class="">
                        Combustible
                      </li>
                      <li data-option-value="Compensación" class="">
                        Compensación
                      </li>
                      <li data-option-value="Competitivo" class="">
                        Competitivo
                      </li>
                      <li data-option-value="Compiescolta" class="">
                        Compiescolta
                      </li>
                      <li data-option-value="Coraza Reflejo" class="">
                        Coraza Reflejo
                      </li>
                      <li data-option-value="Corrosión" class="">
                        Corrosión
                      </li>
                      <li data-option-value="Corte Fuerte" class="">
                        Corte Fuerte
                      </li>
                      <li data-option-value="Coránima" class="">
                        Coránima
                      </li>
                      <li data-option-value="Cosecha" class="">
                        Cosecha
                      </li>
                      <li data-option-value="Cromolente" class="">
                        Cromolente
                      </li>
                      <li data-option-value="Cuerpo Llama" class="">
                        Cuerpo Llama
                      </li>
                      <li data-option-value="Cuerpo Maldito" class="">
                        Cuerpo Maldito
                      </li>
                      <li data-option-value="Cuerpo Mortal" class="">
                        Cuerpo Mortal
                      </li>
                      <li data-option-value="Cuerpo Puro" class="">
                        Cuerpo Puro
                      </li>
                      <li data-option-value="Cuerpo Vívido" class="">
                        Cuerpo Vívido
                      </li>
                      <li data-option-value="Cura Lluvia" class="">
                        Cura Lluvia
                      </li>
                      <li data-option-value="Cura Natural" class="">
                        Cura Natural
                      </li>
                      <li data-option-value="Cálculo Final" class="">
                        Cálculo Final
                      </li>
                      <li data-option-value="Cólera" class="">
                        Cólera
                      </li>
                      <li data-option-value="Defensa Hoja" class="">
                        Defensa Hoja
                      </li>
                      <li data-option-value="Descarga" class="">
                        Descarga
                      </li>
                      <li data-option-value="Despiste" class="">
                        Despiste
                      </li>
                      <li data-option-value="Dicha" class="">
                        Dicha
                      </li>
                      <li data-option-value="Disfraz" class="">
                        Disfraz
                      </li>
                      <li data-option-value="Don Floral" class="">
                        Don Floral
                      </li>
                      <li data-option-value="Efecto Espora" class="">
                        Efecto Espora
                      </li>
                      <li data-option-value="Elec. Estática" class="">
                        Elec. Estática
                      </li>
                      <li data-option-value="Electrogénesis" class="">
                        Electrogénesis
                      </li>
                      <li data-option-value="Electromotor" class="">
                        Electromotor
                      </li>
                      <li data-option-value="Encadenado" class="">
                        Encadenado
                      </li>
                      <li data-option-value="Energía Pura" class="">
                        Energía Pura
                      </li>
                      <li data-option-value="Enjambre" class="">
                        Enjambre
                      </li>
                      <li data-option-value="Ensañamiento" class="">
                        Ensañamiento
                      </li>
                      <li data-option-value="Entusiasmo" class="">
                        Entusiasmo
                      </li>
                      <li data-option-value="Escama Especial" class="">
                        Escama Especial
                      </li>
                      <li data-option-value="Escama de Hielo" class="">
                        Escama de Hielo
                      </li>
                      <li data-option-value="Escudo Limitado" class="">
                        Escudo Limitado
                      </li>
                      <li data-option-value="Escudo Magma" class="">
                        Escudo Magma
                      </li>
                      <li data-option-value="Escudo Recio" class="">
                        Escudo Recio
                      </li>
                      <li data-option-value="Espada Indómita" class="">
                        Espada Indómita
                      </li>
                      <li data-option-value="Espejo Mágico" class="">
                        Espejo Mágico
                      </li>
                      <li data-option-value="Espesura" class="">
                        Espesura
                      </li>
                      <li data-option-value="Espíritu Vital" class="">
                        Espíritu Vital
                      </li>
                      <li data-option-value="Experto" class="">
                        Experto
                      </li>
                      <li data-option-value="Expulsarena" class="">
                        Expulsarena
                      </li>
                      <li data-option-value="Filtro" class="">
                        Filtro
                      </li>
                      <li data-option-value="Firmeza" class="">
                        Firmeza
                      </li>
                      <li data-option-value="Flaqueza" class="">
                        Flaqueza
                      </li>
                      <li data-option-value="Flexibilidad" class="">
                        Flexibilidad
                      </li>
                      <li data-option-value="Foco Interno" class="">
                        Foco Interno
                      </li>
                      <li data-option-value="Francotirador" class="">
                        Francotirador
                      </li>
                      <li data-option-value="Fuente Energía" class="">
                        Fuente Energía
                      </li>
                      <li data-option-value="Fuerte Afecto" class="">
                        Fuerte Afecto
                      </li>
                      <li data-option-value="Fuerza Cerebral" class="">
                        Fuerza Cerebral
                      </li>
                      <li data-option-value="Fuga" class="">
                        Fuga
                      </li>
                      <li data-option-value="Funda" class="">
                        Funda
                      </li>
                      <li data-option-value="Garra Dura" class="">
                        Garra Dura
                      </li>
                      <li data-option-value="Gas Reactivo" class="">
                        Gas Reactivo
                      </li>
                      <li data-option-value="Gran Encanto" class="">
                        Gran Encanto
                      </li>
                      <li data-option-value="Guardia Espectro" class="">
                        Guardia Espectro
                      </li>
                      <li data-option-value="Guardia Metálica" class="">
                        Guardia Metálica
                      </li>
                      <li data-option-value="Gula" class="">
                        Gula
                      </li>
                      <li data-option-value="Gélido" class="">
                        Gélido
                      </li>
                      <li data-option-value="Hedor" class="">
                        Hedor
                      </li>
                      <li data-option-value="Herbogénesis" class="">
                        Herbogénesis
                      </li>
                      <li data-option-value="Herbívoro" class="">
                        Herbívoro
                      </li>
                      <li data-option-value="Hidratación" class="">
                        Hidratación
                      </li>
                      <li data-option-value="Hidrorrefuerzo" class="">
                        Hidrorrefuerzo
                      </li>
                      <li data-option-value="Huida" class="">
                        Huida
                      </li>
                      <li data-option-value="Humedad" class="">
                        Humedad
                      </li>
                      <li data-option-value="Humo Blanco" class="">
                        Humo Blanco
                      </li>
                      <li data-option-value="Hurto" class="">
                        Hurto
                      </li>
                      <li data-option-value="Hélice Caudal" class="">
                        Hélice Caudal
                      </li>
                      <li data-option-value="Ignorante" class="">
                        Ignorante
                      </li>
                      <li data-option-value="Ignífugo" class="">
                        Ignífugo
                      </li>
                      <li data-option-value="Iluminación" class="">
                        Iluminación
                      </li>
                      <li data-option-value="Ilusión" class="">
                        Ilusión
                      </li>
                      <li data-option-value="Impasible" class="">
                        Impasible
                      </li>
                      <li data-option-value="Impostor" class="">
                        Impostor
                      </li>
                      <li data-option-value="Impulso" class="">
                        Impulso
                      </li>
                      <li data-option-value="Imán" class="">
                        Imán
                      </li>
                      <li data-option-value="Indefenso" class="">
                        Indefenso
                      </li>
                      <li data-option-value="Inicio Lento" class="">
                        Inicio Lento
                      </li>
                      <li data-option-value="Inmunidad" class="">
                        Inmunidad
                      </li>
                      <li data-option-value="Insomnio" class="">
                        Insomnio
                      </li>
                      <li data-option-value="Insonorizar" class="">
                        Insonorizar
                      </li>
                      <li data-option-value="Intimidación" class="">
                        Intimidación
                      </li>
                      <li data-option-value="Intrépido" class="">
                        Intrépido
                      </li>
                      <li data-option-value="Irascible" class="">
                        Irascible
                      </li>
                      <li data-option-value="Justiciero" class="">
                        Justiciero
                      </li>
                      <li data-option-value="Letargo Perenne" class="">
                        Letargo Perenne
                      </li>
                      <li data-option-value="Levitación" class="">
                        Levitación
                      </li>
                      <li data-option-value="Liviano" class="">
                        Liviano
                      </li>
                      <li data-option-value="Llovizna" class="">
                        Llovizna
                      </li>
                      <li data-option-value="Lodo Líquido" class="">
                        Lodo Líquido
                      </li>
                      <li data-option-value="Líbero" class="">
                        Líbero
                      </li>
                      <li data-option-value="Madrugar" class="">
                        Madrugar
                      </li>
                      <li data-option-value="Maduración" class="">
                        Maduración
                      </li>
                      <li data-option-value="Mal Sueño" class="">
                        Mal Sueño
                      </li>
                      <li data-option-value="Mandíbula Fuerte" class="">
                        Mandíbula Fuerte
                      </li>
                      <li data-option-value="Manto Frondoso" class="">
                        Manto Frondoso
                      </li>
                      <li data-option-value="Manto Níveo" class="">
                        Manto Níveo
                      </li>
                      <li data-option-value="Mar Llamas" class="">
                        Mar Llamas
                      </li>
                      <li data-option-value="Mar del Albor" class="">
                        Mar del Albor
                      </li>
                      <li data-option-value="Megadisparador" class="">
                        Megadisparador
                      </li>
                      <li data-option-value="Menos" class="">
                        Menos
                      </li>
                      <li data-option-value="Metal Liviano" class="">
                        Metal Liviano
                      </li>
                      <li data-option-value="Metal Pesado" class="">
                        Metal Pesado
                      </li>
                      <li data-option-value="Mimetismo" class="">
                        Mimetismo
                      </li>
                      <li data-option-value="Modo Daruma" class="">
                        Modo Daruma
                      </li>
                      <li data-option-value="Momia" class="">
                        Momia
                      </li>
                      <li data-option-value="Monotema" class="">
                        Monotema
                      </li>
                      <li data-option-value="Mudar" class="">
                        Mudar
                      </li>
                      <li data-option-value="Multitipo" class="">
                        Multitipo
                      </li>
                      <li data-option-value="Muro Mágico" class="">
                        Muro Mágico
                      </li>
                      <li data-option-value="Mutapetito" class="">
                        Mutapetito
                      </li>
                      <li data-option-value="Mutatipo" class="">
                        Mutatipo
                      </li>
                      <li data-option-value="Más" class="">
                        Más
                      </li>
                      <li data-option-value="Nado Rápido" class="">
                        Nado Rápido
                      </li>
                      <li data-option-value="Nebulogénesis" class="">
                        Nebulogénesis
                      </li>
                      <li data-option-value="Nerviosismo" class="">
                        Nerviosismo
                      </li>
                      <li data-option-value="Nevada" class="">
                        Nevada
                      </li>
                      <li data-option-value="Normalidad" class="">
                        Normalidad
                      </li>
                      <li data-option-value="Ojo Compuesto" class="">
                        Ojo Compuesto
                      </li>
                      <li data-option-value="Pararrayos" class="">
                        Pararrayos
                      </li>
                      <li data-option-value="Pareja de Baile" class="">
                        Pareja de Baile
                      </li>
                      <li data-option-value="Pelaje Recio" class="">
                        Pelaje Recio
                      </li>
                      <li data-option-value="Peluche" class="">
                        Peluche
                      </li>
                      <li data-option-value="Pelusa" class="">
                        Pelusa
                      </li>
                      <li data-option-value="Piel Celeste" class="">
                        Piel Celeste
                      </li>
                      <li data-option-value="Piel Eléctrica" class="">
                        Piel Eléctrica
                      </li>
                      <li data-option-value="Piel Feérica" class="">
                        Piel Feérica
                      </li>
                      <li data-option-value="Piel Helada" class="">
                        Piel Helada
                      </li>
                      <li data-option-value="Piel Milagro" class="">
                        Piel Milagro
                      </li>
                      <li data-option-value="Piel Seca" class="">
                        Piel Seca
                      </li>
                      <li data-option-value="Piel Tosca" class="">
                        Piel Tosca
                      </li>
                      <li data-option-value="Pies Rápidos" class="">
                        Pies Rápidos
                      </li>
                      <li data-option-value="Poder Arena" class="">
                        Poder Arena
                      </li>
                      <li data-option-value="Poder Solar" class="">
                        Poder Solar
                      </li>
                      <li data-option-value="Polvo Escudo" class="">
                        Polvo Escudo
                      </li>
                      <li data-option-value="Pompa" class="">
                        Pompa
                      </li>
                      <li data-option-value="Potencia" class="">
                        Potencia
                      </li>
                      <li data-option-value="Potencia Bruta" class="">
                        Potencia Bruta
                      </li>
                      <li data-option-value="Predicción" class="">
                        Predicción
                      </li>
                      <li data-option-value="Presión" class="">
                        Presión
                      </li>
                      <li data-option-value="Prestidigitador" class="">
                        Prestidigitador
                      </li>
                      <li data-option-value="Primer Auxilio" class="">
                        Primer Auxilio
                      </li>
                      <li data-option-value="Psicogénesis" class="">
                        Psicogénesis
                      </li>
                      <li data-option-value="Punk Rock" class="">
                        Punk Rock
                      </li>
                      <li data-option-value="Punta Acero" class="">
                        Punta Acero
                      </li>
                      <li data-option-value="Punto Tóxico" class="">
                        Punto Tóxico
                      </li>
                      <li data-option-value="Puño Férreo" class="">
                        Puño Férreo
                      </li>
                      <li data-option-value="Quitanieves" class="">
                        Quitanieves
                      </li>
                      <li data-option-value="Rastro" class="">
                        Rastro
                      </li>
                      <li data-option-value="Reacción Química" class="">
                        Reacción Química
                      </li>
                      <li data-option-value="Receptor" class="">
                        Receptor
                      </li>
                      <li data-option-value="Recogebolas" class="">
                        Recogebolas
                      </li>
                      <li data-option-value="Recogemiel" class="">
                        Recogemiel
                      </li>
                      <li data-option-value="Recogida" class="">
                        Recogida
                      </li>
                      <li data-option-value="Regeneración" class="">
                        Regeneración
                      </li>
                      <li data-option-value="Regia Presencia" class="">
                        Regia Presencia
                      </li>
                      <li data-option-value="Remoto" class="">
                        Remoto
                      </li>
                      <li data-option-value="Respondón" class="">
                        Respondón
                      </li>
                      <li data-option-value="Resquicio" class="">
                        Resquicio
                      </li>
                      <li data-option-value="Retirada" class="">
                        Retirada
                      </li>
                      <li data-option-value="Revés" class="">
                        Revés
                      </li>
                      <li data-option-value="Rezagado" class="">
                        Rezagado
                      </li>
                      <li data-option-value="Ritmo Propio" class="">
                        Ritmo Propio
                      </li>
                      <li data-option-value="Rivalidad" class="">
                        Rivalidad
                      </li>
                      <li data-option-value="Rizos Rebeldes" class="">
                        Rizos Rebeldes
                      </li>
                      <li data-option-value="Robustez" class="">
                        Robustez
                      </li>
                      <li data-option-value="Roca Sólida" class="">
                        Roca Sólida
                      </li>
                      <li data-option-value="Rompeaura" class="">
                        Rompeaura
                      </li>
                      <li data-option-value="Rompemoldes" class="">
                        Rompemoldes
                      </li>
                      <li data-option-value="Ráfaga Delta" class="">
                        Ráfaga Delta
                      </li>
                      <li data-option-value="Sacapecho" class="">
                        Sacapecho
                      </li>
                      <li data-option-value="Sebo" class="">
                        Sebo
                      </li>
                      <li data-option-value="Sequía" class="">
                        Sequía
                      </li>
                      <li data-option-value="Simbiosis" class="">
                        Simbiosis
                      </li>
                      <li data-option-value="Simple" class="">
                        Simple
                      </li>
                      <li data-option-value="Sincronía" class="">
                        Sincronía
                      </li>
                      <li data-option-value="Sistema Alfa" class="">
                        Sistema Alfa
                      </li>
                      <li data-option-value="Sombra Trampa" class="">
                        Sombra Trampa
                      </li>
                      <li data-option-value="Superguarda" class="">
                        Superguarda
                      </li>
                      <li data-option-value="Telepatía" class="">
                        Telepatía
                      </li>
                      <li data-option-value="Tenacidad" class="">
                        Tenacidad
                      </li>
                      <li data-option-value="Terravoltaje" class="">
                        Terravoltaje
                      </li>
                      <li data-option-value="Tierra del Ocaso" class="">
                        Tierra del Ocaso
                      </li>
                      <li data-option-value="Tinovictoria" class="">
                        Tinovictoria
                      </li>
                      <li data-option-value="Toque Tóxico" class="">
                        Toque Tóxico
                      </li>
                      <li data-option-value="Torrente" class="">
                        Torrente
                      </li>
                      <li data-option-value="Tragamisil" class="">
                        Tragamisil
                      </li>
                      <li data-option-value="Trampa Arena" class="">
                        Trampa Arena
                      </li>
                      <li data-option-value="Tumbos" class="">
                        Tumbos
                      </li>
                      <li data-option-value="Turbollama" class="">
                        Turbollama
                      </li>
                      <li data-option-value="Ultraimpulso" class="">
                        Ultraimpulso
                      </li>
                      <li data-option-value="Veleta" class="">
                        Veleta
                      </li>
                      <li data-option-value="Velo Agua" class="">
                        Velo Agua
                      </li>
                      <li data-option-value="Velo Arena" class="">
                        Velo Arena
                      </li>
                      <li data-option-value="Velo Aroma" class="">
                        Velo Aroma
                      </li>
                      <li data-option-value="Velo Dulce" class="">
                        Velo Dulce
                      </li>
                      <li data-option-value="Velo Flor" class="">
                        Velo Flor
                      </li>
                      <li data-option-value="Velo Pastel" class="">
                        Velo Pastel
                      </li>
                      <li data-option-value="Ventosas" class="">
                        Ventosas
                      </li>
                      <li data-option-value="Vigilante" class="">
                        Vigilante
                      </li>
                      <li data-option-value="Viscosidad" class="">
                        Viscosidad
                      </li>
                      <li data-option-value="Vista Lince" class="">
                        Vista Lince
                      </li>
                      <li data-option-value="Voz Fluida" class="">
                        Voz Fluida
                      </li>
                      <li data-option-value="Zoquete" class="">
                        Zoquete
                      </li>
                      <li data-option-value="Ímpetu Ardiente" class="">
                        Ímpetu Ardiente
                      </li>
                      <li data-option-value="Ímpetu Arena" class="">
                        Ímpetu Arena
                      </li>
                      <li data-option-value="Ímpetu Tóxico" class="">
                        Ímpetu Tóxico
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
