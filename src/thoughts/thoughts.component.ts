import { Component } from '@angular/core';
import { ThoughtsService } from './thoughts.service';

@Component({
  selector: 'thoughts',
  templateUrl: './thoughts.component.html',
})
export class ThoughtsComponent {
  thoughts: any;

  constructor (private thoughtsService: ThoughtsService) {
    // link to the thoughts data
    thoughtsService.loadThoughts('http://content.evanplaice.com/thoughts/thoughts.json');
    thoughtsService.thoughts$.subscribe(update => this.thoughts = update);
  }
}
