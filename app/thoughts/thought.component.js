import { Component, View, Inject } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ThoughtsService } from './thoughts.service';
import { MarkdownComponent } from 'ng2-markdown-component';

@Component({
  selector: 'thought',
  templateUrl: 'app/thoughts/thought.component.html',
  directives: [ MarkdownComponent ]
})

export class ThoughtComponent {
  constructor (@Inject(ThoughtsService) thoughtsService, @Inject(RouteParams) params) {
    // console.log('thought');
    // extract the post id from the GET params
    this.param = params.get('post');
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
