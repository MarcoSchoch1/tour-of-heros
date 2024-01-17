import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.less'
})
export class HeroesComponent {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}
