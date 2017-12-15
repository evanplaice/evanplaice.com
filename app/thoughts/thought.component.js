import { Component, Inject } from 'angular-core';
import { RouteSegment } from 'angular-router';
import { ThoughtsService } from './thoughts.service';
import { MarkdownComponent } from 'ng2-markdown-component';

@Component({
  selector: 'thought',
  templateUrl: 'app/thoughts/thought.component.html',
  directives: [ MarkdownComponent ]
})

export class ThoughtComponent {
  constructor (@Inject(ThoughtsService) thoughtsService, @Inject(RouteSegment) segment) {
    // extract the post id from the GET params
    this.param = segment.getParam('post');
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
