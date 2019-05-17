import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThoughtModel } from './thought.model';
import { ThoughtsModel } from './thoughts.model';
import { ThoughtsService } from './thoughts.service';

@Component({
  selector: 'thought',
  templateUrl: './thought.component.html',
})

export class ThoughtComponent {
  param: string;
  thoughts: ThoughtsModel;
  thought: ThoughtModel;

  constructor (private thoughtsService: ThoughtsService, private route: ActivatedRoute) {
    // extract the post id from the GET params
    this.param = route.snapshot.params['post'];

    // link to the thoughts data
    if (thoughtsService.thoughts$) {
      thoughtsService.thoughts$.subscribe(update => this.set(update));
    }
  }

  set(thoughts){
    this.thoughts = thoughts;
    this.thought = thoughts.posts
    .filter((post) => {
      return post.url === this.param;
    })
    .pop();
  }
}
