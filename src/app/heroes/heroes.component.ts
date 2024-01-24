import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.less',
})
export class HeroesComponent {

  ngOnInit(): void{
    this.getHeros();
  }

  constructor(private heroService: HeroService) { }

  heroes: Hero[] = [];

  selectedHero?: Hero;

  onSelected(hero: Hero): void{
    this.selectedHero = hero;
    console.log('hero selected: ' + hero.name)
  }

  getHeros(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
