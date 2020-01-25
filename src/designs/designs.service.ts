import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DesignModel } from './design.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DesignsService {
  designs$;
  data = [];
  observer;
  http;

  constructor(@Inject(HttpClient) http) {
    this.http = http;
    this.designs$ = new Observable(observer => this.observer = observer);
    this.setup();
  }

  setup() {
    this.http
      .get('https://content.evanplaice.com/designs/designs.json')
      .subscribe(
        items => {
          // exclude hidden values
          items = items.filter(item => !item.hidden);
          // convert value to model
          items = items.map(item => new DesignModel(item));
          // update observers
          this.observer.next(this.data = items);
        },
        error => console.log(error)
      );
  }

  load() {
    this.observer.next(this.data);
  }
}
