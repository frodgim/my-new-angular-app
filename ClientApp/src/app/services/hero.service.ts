import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';



@Injectable()
export class HeroService  {

  getBaseUrlApi(): string {

    return this.baseUrl + 'api/Heroes';
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.getBaseUrlApi() + '/GetHeroes');
  }

  getHero(id: number): Observable<Hero> {
    const params = new HttpParams()
                        .set('id', `${id}`);
    return this.http.get<Hero>(this.getBaseUrlApi() + '/GetHero', {params: params});
  }

  saveHero(hero: Hero): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<boolean>(this.getBaseUrlApi() + '/SaveHero',
                                        hero, {headers: headers});
  }

}

