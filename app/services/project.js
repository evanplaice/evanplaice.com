import {
  Injectable,
  Inject
} from 'angular2/core';
import {
  Http
} from 'angular2/http';
import {
  ProjectModel
} from 'app/models/project';

@Injectable()
export class ProjectService {
  projects = [];

  constructor (@Inject(Http) http) {
    this.http = http;
    this.loadProjects();
  }

  getProjects () {
    return this.projects;
  }

  loadProjects () {
    this.http.get('content/projects/projects.json').toPromise()
    .then((res) => {
      return JSON.parse(res._body);
    })
    .then((items) => {
      items.map((item) => {
        if (!item.hidden) {
          let project = new ProjectModel(item);
          this.projects.push(project);
        }
      });
    });
  }
}