import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/Observable/of';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero;
  idByRouting: number;
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private messageService: MessageService,
    private location: Location) { }

  ngOnInit() {
    this.idByRouting = +this.route.snapshot.paramMap.get('id');
    if (this.idByRouting) {
      this.getHero();
    }
  }


  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  onSaveHero() {
    this.heroService.saveHero(this.hero).subscribe( r => this.goBack());

    this.messageService.add(`Salvando héroe actual`);
  }

  goBack(): void {
    this.location.back();
  }

}
