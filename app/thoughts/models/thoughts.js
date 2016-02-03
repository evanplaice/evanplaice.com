import { ThoughtModel } from './thought';

export class ThoughtsModel {
  github = '';
  content = '';
  posts = [];

  constructor (thoughts) {
    if (thoughts) {
      this.init(thoughts);
    }
    console.log(this);
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
