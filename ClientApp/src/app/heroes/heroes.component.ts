import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;


  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect (hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`Seleccionado: ${hero.name}`);
  }

  onNewHero() {
    const hero: Hero = {id: -1, name: ''};
    this.heroService.add(hero);
    this.onSelect(hero);

    this.messageService.add(`Añadiendo nuevo héroe`);
  }

  getHeroes() {
    // this.heroService.getHeroes().toPromise().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes()
              .subscribe(heroes => this.heroes = heroes);
    this.messageService.add(`Obteniendo heroes desde heroService`);
  }


}
