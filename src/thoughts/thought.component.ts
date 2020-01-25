import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThoughtModel } from './thought.model';
import { ThoughtsService } from './thoughts.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
})
export class ThoughtComponent {
  param: string;
  thought: ThoughtModel = new ThoughtModel();

  constructor(private thoughtsService: ThoughtsService, private route: ActivatedRoute) {
    this.param = route.snapshot.params.post;
    thoughtsService.thoughts$.subscribe(update => this.thought = this.set(update));
  }

  set(thoughts) {
    return thoughts
      .filter((post) => post.url === this.param)
      .pop();
  }
}
