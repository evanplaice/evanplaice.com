import { Component, View, Inject } from 'angular2/core';
import { VitaeService } from 'app/services/vitae';

@Component({
  selector: 'vitae',
  injectables: [ VitaeService ]
})
@View({
  templateUrl: 'app/components/vitae/vitae.html'
})
export class VitaeComponent {
  constructor (@Inject(VitaeService) vitaeService) {
    // console.log('vitae');

    // initialize the data (ie to avoid uninitialized errors)
    this.vitae = vitaeService.data;
    vitaeService.vitae$.subscribe(update => this.vitae = update);
  }
}
