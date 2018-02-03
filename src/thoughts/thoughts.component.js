import { Component, Inject } from '@angular/core';
import { ThoughtsService } from './thoughts.service';
import template from './thoughts.component.html'

@Component({
  selector: 'thoughts',
  template: template
})
export class ThoughtsComponent {
  constructor (@Inject(ThoughtsService) thoughtsService) {
    // link to the thoughts data
    thoughtsService.loadThoughts('/content/thoughts/thoughts.json');
    thoughtsService.thoughts$.subscribe(update => this.thoughts = update);
  }
}
