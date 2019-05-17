import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ThoughtsModel } from './thoughts.model';
import { map, startWith } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ThoughtsService {
  thoughts$;
  src;
  http;

  constructor (http: HttpClient) {
    // http bindings for a GET request
    this.http = http;
  }

  loadThoughts(path) {
    if (path || this.src) {
      return this.thoughts$ = this.http.get(path || this.src)
        .pipe(
          map(res => {
            const thoughts = new ThoughtsModel(res);
            return thoughts
          }),
          startWith(new ThoughtsModel())
        );
    }
  }
}
