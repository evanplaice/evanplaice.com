import { Component, View, Inject } from 'angular2/core';
import { MODERN_COMPONENT, ResumeService } from 'evanplaice/ng2-resume/resume';

@Component({
  selector: 'vitae',
  injectables: [ ResumeService ]
})
@View({
  templateUrl: 'app/vitae/components/vitae.html',
  directives: [ MODERN_COMPONENT ]
})
export class VitaeComponent {

  constructor (@Inject(ResumeService) resumeService) {
    // console.log('vitae');

    // link to the vitae data
    resumeService.loadResume('content/vitae/resume.json');
    resumeService.resume$.subscribe(update => this.resume = update);
  }
}
