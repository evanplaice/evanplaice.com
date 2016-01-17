import { Component, View, Inject } from 'angular2/core';
import { VitaeService } from 'app/vitae/services/vitae';
import { ResumeComponent } from 'app/resume/components/resume';

@Component({
  selector: 'vitae',
  injectables: [ VitaeService ]
})
@View({
  templateUrl: 'app/vitae/components/vitae.html',
  directives: [ ResumeComponent ]
})
export class VitaeComponent {

  constructor (@Inject(VitaeService) vitaeService) {
    // console.log('vitae');

    // link to the vitae data
    vitaeService.vitae$.subscribe(update => this.resume = update);
  }
}
