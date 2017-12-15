import { ThoughtModel } from './thought.model';

export class ThoughtsModel {
  github = '';
  content = '';
  posts = [];

  constructor (thoughts) {
    if (thoughts) {
      this.init(thoughts);
    }
  }

  init(thoughts){
    if (thoughts.github) {
      this.github = thoughts.github;
    }

    if (thoughts.content) {
      this.content = thoughts.content;
    }

    if (thoughts.posts) {
      thoughts.posts.forEach((post) => {
        this.posts.push(new ThoughtModel(post));
      });
    }
  }
}
