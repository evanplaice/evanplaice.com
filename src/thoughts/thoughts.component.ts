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
    thoughtsService.thoughts$.subscribe(update => this.thoughts = update);
  }
}
