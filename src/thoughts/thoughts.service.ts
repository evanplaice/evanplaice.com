import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThoughtModel } from './thought.model';
import { map, tap, skip } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ThoughtsService {
  public thoughts$: BehaviorSubject<[ThoughtModel]> = new BehaviorSubject([new ThoughtModel()]);

  http: HttpClient;
  path;

  constructor(http: HttpClient) {
    this.http = http;
    const path = 'https://content.evanplaice.com/thoughts/thoughts.json';

    this.load(path);
  }

  public load(path) {
    this.http.get(path)
      .pipe(
       map((thoughts: []) => thoughts.map(thought => new ThoughtModel(thought))),
       tap({
         next: (data: any) => {
           this.thoughts$.next(data);
         },
         error: (e) => { console.error(e); }
        })
      )
      .subscribe();
  }
}
