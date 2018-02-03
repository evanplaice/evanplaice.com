import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThoughtsService } from './thoughts.service';
import template from './thought.component.html';

@Component({
  selector: 'thought',
  template: template
})

export class ThoughtComponent {
  constructor (@Inject(ThoughtsService) thoughtsService, @Inject(ActivatedRoute) route) {
    // extract the post id from the GET params
    this.param = route.snapshot.params['post'];

    // link to the thoughts data
    thoughtsService.thoughts$.subscribe(update => this.set(update));
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
