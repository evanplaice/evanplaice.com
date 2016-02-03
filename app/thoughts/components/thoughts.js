import { Component, View, Inject } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { ThoughtsService } from '../services/thoughts';

@Component({
  selector: 'thoughts'
})
@View({
  templateUrl: 'app/thoughts/components/thoughts.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class ThoughtsComponent {
  constructor (@Inject(ThoughtsService) thoughtsService) {
   console.log('thoughts');

    // link to the thoughts data
    thoughtsService.loadThoughts('content/thoughts/thoughts.json');
    thoughtsService.thoughts$.subscribe(update => this.thoughts = update);
  }
}
