import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import { DesignModel } from 'app/models/design';

@Injectable()
export class DesignService {
  designs = [];

  constructor (@Inject(Http) http) {
    this.http = http;
    this.loadDesigns();
  }

  getDesigns () {
    return this.designs;
  }

  loadDesigns () {
    this.http.get('content/designs/designs.json').toPromise()
    .then((res) => {
      return JSON.parse(res._body);
    })
    .then((items) => {
      items.map((item) => {
        if (!item.hidden) {
          let design = new DesignModel(item);
          this.designs.push(design);
        }
      });
    });
  }
}