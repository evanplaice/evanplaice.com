import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from 'angular-core';
import { Http } from 'angular-http';
import { ThoughtsModel } from './thoughts.model';

@Injectable()
export class ThoughtsService {
  thoughts$;
  src;

  constructor (@Inject(Http) http) {
    // http bindings for a GET request
    this.http = http;
  }

  loadThoughts(path) {
    if (path || this.src) {
      return this.thoughts$ = this.http.get(path || this.src)
      .map(res => new ThoughtsModel(res.json()))
      .startWith(new ThoughtsModel());
    }
  }
}
