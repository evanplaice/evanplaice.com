import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProjectModel } from 'app/projects/project.model';

@Injectable()
export class ProjectsService {
  projects$;
  data = [];
  _observer;

  constructor (@Inject(Http) http) {
    // http bindings for a GET request
    this.http = http;
    // observer to load data asynchronously
    this.projects$ = new Observable(observer => this._observer = observer);
    // pre-load the data
    this.loadProjects();
  }

  getProjects() {
    this._observer.next(this.data);
  }

  loadProjects () {
    this.http.get('content/projects/projects.json')
      .map(res => res.json())
      .subscribe(
        items => {
          // exclude hidden values
          items = items.filter(item => !item.hidden);
          // convert value to model
          items = items.map(item => new ProjectModel(item));
          // update observers
          this._observer.next(this.data = items);
        },
          error => console.log(error),
          () => {
        }
      );
  }
}
