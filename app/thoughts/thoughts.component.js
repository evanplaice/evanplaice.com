import { Component, Inject } from 'angular-core';
import { ROUTER_DIRECTIVES } from 'router';
import { ThoughtsService } from './thoughts.service';

@Component({
  selector: 'thoughts',
  templateUrl: 'app/thoughts/thoughts.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class ThoughtsComponent {
  constructor (@Inject(ThoughtsService) thoughtsService) {
    // link to the thoughts data
    thoughtsService.loadThoughts('content/thoughts/thoughts.json');
    thoughtsService.thoughts$.subscribe(update => this.thoughts = update);
  }
}
