import { Component, View, Inject } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ThoughtsService } from '../services/thoughts';
import { MarkdownComponent } from 'ng2-markdown-component';

@Component({
  selector: 'thought'
})
@View({
  templateUrl: 'app/thoughts/components/thought.html',
  directives: [ MarkdownComponent ]
})

export class ThoughtComponent {
  constructor (@Inject(ThoughtsService) thoughtsService, @Inject(RouteParams) params) {
    console.log('thought');
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
