import { Component, View, Inject } from 'angular2/core';
import { ThoughtsService } from '../services/thoughts';
import { MarkdownComponent } from 'ng2-markdown-component';

@Component({
  selector: 'thoughts'
})
@View({
  templateUrl: 'app/thoughts/components/thoughts.html',
  directives: [ MarkdownComponent ]
})
export class ThoughtsComponent {
  constructor (@Inject(ThoughtsService) thoughtsService) {
   console.log('thoughts');

    // link to the thoughts data
    thoughtsService.loadThoughts('content/thoughts/thoughts.json');
    thoughtsService.thoughts$.subscribe(update => this.thoughts = update);
    console.log(this.thoughts);
  }
}
