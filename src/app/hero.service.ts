import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('HeroService fetched all the heroes')
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`We grapped the Hero with id ${id}`)
    return of(HEROES.find(hero => hero.id == id)!)
  }
}
