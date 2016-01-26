import { Component, View, Inject } from 'angular2/core';
import { MODERN_COMPONENT, FreshService } from 'app/resume/resume';

@Component({
  selector: 'vitae',
  injectables: [ FreshService ]
})
@View({
  templateUrl: 'app/vitae/components/vitae.html',
  directives: [ MODERN_COMPONENT ]
})
export class VitaeComponent {

  constructor (@Inject(FreshService) resumeService) {
    // console.log('vitae');

    // link to the vitae data
    resumeService.loadResume('content/vitae/full.json');
    resumeService.resume$.subscribe(update => this.resume = update);
  }
}
