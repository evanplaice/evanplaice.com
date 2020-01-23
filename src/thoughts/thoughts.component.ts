import { Component } from '@angular/core';
import { ThoughtModel } from './thought.model';
import { ThoughtsService } from './thoughts.service';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
})
export class ThoughtsComponent {
  thoughts: ThoughtModel[];

  constructor(private thoughtsService: ThoughtsService) {
    // link to the thoughts data
    thoughtsService.loadThoughts('http://content.evanplaice.com/thoughts/thoughts.json');
    thoughtsService.thoughts$.subscribe(update => this.thoughts = update);
  }
}
