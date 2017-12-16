import { Component, Inject } from '@angular/core';
import { ResumeService } from 'evanplaice/ng2-resume/resume';

@Component({
  selector: 'vitae',
  injectables: [ ResumeService ],
  templateUrl: 'app/vitae/vitae.component.html'
})
export class VitaeComponent {

  constructor (@Inject(ResumeService) resumeService) {
    // link to the vitae data
    resumeService.loadResume('jspm_packages/github/evanplaice/resume@0.0.8/Evan.Plaice-Full.Stack.Dev.json');
    resumeService.resume$.subscribe(update => this.resume = update);
  }
}
