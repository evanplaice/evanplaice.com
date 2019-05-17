import { ThoughtModel } from './thought.model';

export class ThoughtsModel {
  _posts: ThoughtModel[] = [];

  constructor (thoughts?) {
    if (thoughts) {
      this.posts = thoughts.posts;
    }
  }

  get posts(): ThoughtModel[] {
    return this._posts;
  }

  set posts(posts: ThoughtModel[]) {
    posts.forEach((post: {}) => {
      this._posts.push(new ThoughtModel(post));
    });
  }
}
