import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { GameSearchService } from '../../core/services/common/game-search.service';
import { AutoDestroyService } from '../../core/services/utils/auto-destroy.service';
import { switchMap, takeUntil, tap } from 'rxjs';
import { Game } from '../../core/models/game';

import { SearchFilters } from '../../core/models/search-filters';
import { SpinnerComponent } from '../spinner/spinner.component';
import { GameListComponent } from '../game-list/game-list.component';

@Component({
  selector: 'app-abstract-games-page',
  standalone: true,
  imports: [GameListComponent, SpinnerComponent],
  templateUrl: './abstract-games-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './abstract-games-page.component.scss',
})
export abstract class AbstractGamesPageComponent implements OnInit {
  protected readonly gamesSearchService: GameSearchService =
    inject(GameSearchService);
  /*   protected readonly genreService: GenreService = inject(GenreService); */
  protected readonly destroy$: AutoDestroyService = inject(AutoDestroyService);
  /*   private readonly fb: FormBuilder = inject(FormBuilder); */

  $loading: Signal<boolean> = this.gamesSearchService.$loading;
  $games: WritableSignal<Game[]> = this.gamesSearchService.$games;
  searchFilters: SearchFilters = {
    search: '',
    page_size: 50,
  };
  constructor() {}
  ngOnInit(): void {
    this.gamesSearchService.queryString$
      .pipe(
        tap((query:string)=>this.searchFilters.search=query),
        switchMap((title: string) =>
          this.gamesSearchService.searchGames2(this.searchFilters)
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => this.gamesSearchService.setGames(data.results));
  }
}