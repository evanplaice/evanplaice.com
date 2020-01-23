import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThoughtModel } from './thought.model';
import { map, startWith } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ThoughtsService {
  thoughts$;
  src;
  http;

  constructor(http: HttpClient) {
    // http bindings for a GET request
    this.http = http;
  }

  load(path) {
    if (path || this.src) {
      return this.thoughts$ = this.http.get(path || this.src)
        .pipe(
          map((thoughts: []) => thoughts.map(value => new ThoughtModel(value))),
          startWith([new ThoughtModel()])
        );
    }
  }
}
