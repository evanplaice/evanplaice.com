import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { FRESHModel } from 'app/models/fresh';

@Injectable()
export class VitaeService {
  vitae$;
  data;
  _observer;

  constructor (@Inject(Http) http) {
    this.http = http;
    this.vitae$ = new Observable(observer => this._observer = observer);
    this.data = new FRESHModel();
    this.loadVitae();
  }

  loadVitae () {
    this.http.get('content/vitae/resume.json')
    .map(res => res.json())
    .subscribe(
      json => {
        this._observer.next(new FRESHModel(json));
      },
      error => console.log(error),
      () => {
        // console.log('Vitae loaded successfully');
      }
    );
  }
}
