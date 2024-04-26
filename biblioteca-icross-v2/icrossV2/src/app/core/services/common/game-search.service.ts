import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Game, SearchResult } from '../../models/game';


@Injectable({
  providedIn: 'root',
})
export class GameSearchService {
  $games: WritableSignal<Game[]> = signal([]);
  constructor(private httpCliente: HttpClient) {}
  searchGames(): Observable<SearchResult> {
    return this.httpCliente.get<SearchResult>(
      environment.BASE_API_URL + 'games'
    );
  }
  setGames(games: Game[]): void {
    this.$games.set(games);
  }
}
