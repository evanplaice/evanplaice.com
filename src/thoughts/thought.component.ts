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
  thoughts: ThoughtModel[];

  constructor(private thoughtsService: ThoughtsService, private route: ActivatedRoute) {
    // extract the post id from the GET params
    this.param = route.snapshot.params.post;

    // link to the thoughts data
    if (thoughtsService.thoughts$) {
      thoughtsService.thoughts$.subscribe(update => this.set(update));
    }
  }

  set(thoughts) {
    this.thoughts
      .filter((post) => post.url === this.param)
      .pop();
  }
}
