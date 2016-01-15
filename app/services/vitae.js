import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { FRESHModel } from 'app/models/fresh';

@Injectable()
export class VitaeService {
  vitae$;
  data = new FRESHModel();
  _observer;

  constructor (@Inject(Http) http) {
    // http bindings for a GET request
    this.http = http;
    // observer to load data asynchronously
    this.vitae$ = new Observable(observer => this._observer = observer);
    // pre-load the data
    this.loadVitae();
  }

  getVitae() {
    this._observer.next(this.data);
  }

  loadVitae () {
    this.http.get('content/vitae/resume.json')
    .map(res => res.json())
    .subscribe(
      json => {
        // update observers
        this._observer.next(this.data = new FRESHModel(json));
      },
      error => console.log(error),
      () => {
        // console.log('Vitae loaded successfully');
      }
    );
  }
}
