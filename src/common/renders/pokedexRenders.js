export const resultTileRender = (result) => (
  <li class="animating" style="opacity: 1; top: 0px; left: 0px; transform: matrix(1, 0, 0, 1, 0, 0);">
    <figure>
      <a href="/pokedex/{result.slug}">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{result.code}.png" />
      </a>
    </figure>

    <div class="pokemon-info">
      <p class="id">
        <span class="number-prefix">N.º </span>{result.code}
      </p>
      <h5>{result.name}</h5>

      {result.type.map(type => (
        <div class="abilities">
          <span class="pill background-color-{type}">{type}</span>
        </div>
      ))}
    </div>
  </li>
);
