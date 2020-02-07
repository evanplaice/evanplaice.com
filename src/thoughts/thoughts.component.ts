import { Component } from '@angular/core';
import { ThoughtModel } from './thought.model';
import { ThoughtsService } from './thoughts.service';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styles: [`
    h3 {
      text-align: left;
    }
  `]
})
export class ThoughtsComponent {
  thoughts: ThoughtModel[];

  constructor(private thoughtsService: ThoughtsService) {
    thoughtsService.thoughts$.subscribe(update => this.thoughts = update);
  }
}
