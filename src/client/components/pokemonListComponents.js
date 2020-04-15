import ListElement from './listElement';
import { pokemonListRender } from '../../common/renders/pokemonRenders';

customElements.define(
  'pokemon-list',
  class PokemonList extends ListElement {
    constructor() {
      super();
    }
    render() {
      return this.items && pokemonListRender(this.items);
    }
    events() {
      console.log('events');
      const loadMoreButton = this.querySelector('#loadMore');
      loadMoreButton.addEventListener('click', event => {
        this.fetchList({limit: 40});
      });
    }
  }
);
