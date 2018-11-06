import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
    selectedHero: Hero;

  constructor() {
    this.heroes = HEROES;
  }

  ngOnInit() {
  }

  onSelect (hero: Hero) {
    this.selectedHero = hero;
  }

  onNewHero() {
    const hero: Hero = {id: -1, name: ''};
    this.heroes.push(hero);
    this.selectedHero = hero;
  }
}
