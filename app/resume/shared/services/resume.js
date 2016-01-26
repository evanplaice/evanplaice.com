import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { FreshModel } from 'app/resume/shared/models/fresh';

@Injectable()
export class ResumeService {
  resume$;
  src;

  constructor (@Inject(Http) http) {
    // http bindings for a GET request
    this.http = http;

    // pre-load the data
    this.resume$ = this.loadResume();
  }

  loadResume(path) {
    if (path || this.src) {
      return this.resume$ = this.http.get(path || this.src)
      .map(res => new FreshModel(res.json()))
      .startWith(new FreshModel());
    }
  }
}
