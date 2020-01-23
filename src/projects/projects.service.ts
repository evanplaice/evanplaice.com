import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProjectModel } from './project.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectsService {
  projects$;
  data = [];
  observer;
  http;

  constructor(@Inject(HttpClient) http) {
    this.http = http;
    this.projects$ = new Observable(observer => this.observer = observer);
    this.setup();
  }

  setup() {
    this.http.get('https://content.evanplaice.com/projects/projects.json')
      .subscribe(
        items => {
          // exclude hidden values
          items = items.filter(item => !item.hidden);
          // convert value to model
          items = items.map(item => new ProjectModel(item));
          // update observers
          this.observer.next(this.data = items);
        },
          error => console.log(error),
          () => {
        }
      );
  }

  load() {
    this.observer.next(this.data);
  }
}
