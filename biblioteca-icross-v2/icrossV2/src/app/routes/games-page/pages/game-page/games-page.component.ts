import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AutoDestroyService } from '../../../../core/services/utils/auto-destroy.service';
import { GameListComponent } from '../../../../shared/game-list/game-list.component';
import { GameCardComponent } from '../../../../shared/game-card/game-card.component';
import { SpinnerComponent } from '../../../../shared/spinner/spinner.component';
import { AbstractGamesPageComponent } from '../../../../shared/abstract-games-page/abstract-games-page.component';
import { SearchFilters } from '../../../../core/models/search-filters';

@Component({
  selector: 'app-games-page',
  standalone: true,
  providers: [AutoDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GameListComponent, SpinnerComponent],
  templateUrl:
    '../../../../shared/abstract-games-page/abstract-games-page.component.html',
})
export class GamesPageComponent extends AbstractGamesPageComponent {
  constructor() {
    super();
  }
}
