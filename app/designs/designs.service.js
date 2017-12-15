import { Injectable, Inject } from 'angular-core';
import { Http } from 'angular-http';
import { Observable } from 'rxjs/Observable';
import { DesignModel } from 'app/designs/design.model';

@Injectable()
export class DesignsService {
  designs$;
  data = [];
  _observer;

  constructor (@Inject(Http) http) {
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
      .get('content/designs/designs.json')
      .map(res => res.json())
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
      );
  }
}
