import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { FreshModel } from 'app/resume/shared/models/fresh';

@Injectable()
export class VitaeService {
  vitae$;

  constructor (@Inject(Http) http) {
    // http bindings for a GET request
    this.http = http;

    // pre-load the data
    this.vitae$ = this.loadVitae();
  }

  loadVitae() {
    return this.vitae$ = this.http.get('content/vitae/resume.json')
    .map(res => new FreshModel(res.json()))
    .startWith(new FreshModel())
  }
}
