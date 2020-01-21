import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ProjectModel } from './project.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectsService {
  projects$;
  data = [];
  _observer;
  http;

  constructor (@Inject(HttpClient) http) {
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
    this.http.get('http://content.evanplaice.com/projects/projects.json')
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
