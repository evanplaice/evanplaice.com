import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DesignModel } from './design.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DesignsService {
  designs$;
  data = [];
  _observer;
  http;

  constructor (@Inject(HttpClient) http) {
    // http bindings for a GET request
    this.http = http;
    // observer to load data asynchronously
    this.designs$ = new Observable(observer => this._observer = observer);
    // pre-load the data
    this.loadDesigns();
  }

  getDesigns() {
    this._observer.next(this.data);
  }

  loadDesigns () {
    this.http
      .get('http://content.evanplaice.com/designs/designs.json')
      .subscribe(
        items => {
          // exclude hidden values
          items = items.filter(item => !item.hidden);
          // convert value to model
          items = items.map(item => new DesignModel(item));
          // update observers
          this._observer.next(this.data = items);
        },
          error => console.log(error),
          () => {
        }
      )
  }
}
