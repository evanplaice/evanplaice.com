import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

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
      .map(res => res.json())
      .startWith({ github:'', content:'', posts:[] });
    }
  }
}
