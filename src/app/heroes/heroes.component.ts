import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.less',
})
export class HeroesComponent {

  ngOnInit(): void{
    this.getHeros();
  }

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  heroes: Hero[] = [];

  selectedHero?: Hero;

  onSelected(hero: Hero): void{
    this.selectedHero = hero;
    console.log('hero selected: ' + hero.name)
      this.messageService.addMessage(`Selectet hero is ${hero.name} with the id ${hero.id}`);
  }

  getHeros(): void {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }
}
