import mainLayout from '../layouts/mainLayout';
import filtersPartial from '../partials/filtersPartial';
import resultsPartial from '../partials/resultsPartial';

export default () => {
  const resultsSection = resultsPartial();
  return mainLayout(
    <div class="container pokedex">
      <section class="section pokedex-header overflow-visible">
        <div class="column-6 push-1">
          <h1 class="section-title no-margin no-padding">Pokédex</h1>
        </div>

        <div class="column-6 push-7"></div>
      </section>

      {resultsSection}

    </div>
  );
};
