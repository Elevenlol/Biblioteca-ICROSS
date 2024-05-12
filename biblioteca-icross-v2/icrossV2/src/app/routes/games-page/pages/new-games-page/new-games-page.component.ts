import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractGamesPageComponent } from '../../../../shared/abstract-games-page/abstract-games-page.component';
import { SearchFilters } from '../../../../core/models/search-filters';
import { AutoDestroyService } from '../../../../core/services/utils/auto-destroy.service';
import { SpinnerComponent } from '../../../../shared/spinner/spinner.component';
import { GameListComponent } from '../../../../shared/game-list/game-list.component';


@Component({
  selector: 'app-new-games-page',
  standalone: true,
  providers: [AutoDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GameListComponent, SpinnerComponent],
  templateUrl:
    '../../../../shared/abstract-games-page/abstract-games-page.component.html',
})
export class NewGamesPageComponent extends AbstractGamesPageComponent {
  override searchFilters: SearchFilters = {
    ...this.searchFilters,
    ordering: '-released',
    metacritic: '80,100',
  };
  constructor() {
    super();
  }
}
