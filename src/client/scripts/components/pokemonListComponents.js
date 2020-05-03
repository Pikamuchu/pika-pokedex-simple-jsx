import FetchRenderElement from '../base/fetchRenderElement';
import RenderElement from '../base/renderElement';
import { pokemonListRender, pokemonListItemRender } from '../../../common/renders/pokemonListRenders';

customElements.define(
  'pokemon-list',
  class PokemonList extends RenderElement {
    constructor() {
      super();
    }
    render() {
      return this.data && pokemonListRender(this.data);
    }
    events() {
      this.on('#loadMore', 'click', event => {
        this.fetchData({ limit: 40 });
      });
    }
  }
);

customElements.define(
  'pokemon-list-filters',
  class PokemonListItem extends RenderElement {
    constructor() {
      super();
    }
    render() {
      return this.filters && pokemonListFiltersRender(this.filters);
    }
    events() {}
  }
);

customElements.define(
  'pokemon-list-items',
  class PokemonListItems extends FetchRenderElement {
    constructor() {
      super();
    }
    render() {
      return this.items && pokemonListRender(this.data);
    }
    events() {
      this.on('#loadMore', 'click', event => {
        this.fetchData({ limit: 40 });
      });
    }
  }
);

customElements.define(
  'pokemon-tile',
  class PokemonTile extends RenderElement {
    constructor() {
      super();
    }
    render() {
      return this.item && pokemonTileRender(this.item);
    }
    events() {}
  }
);
