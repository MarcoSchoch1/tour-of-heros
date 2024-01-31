import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('HeroService fetched all the heroes')
    return this.httpClient.get<Hero[]>('http://127.0.0.1:5000/heroes');
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`We grapped the Hero with id ${id}`)
    return this.httpClient.get<Hero>(`http://127.0.0.1:5000/detail/${id}`);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>('http://127.0.0.1:5000/update', hero)
  }
}
