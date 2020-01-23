export class ThoughtModel {
  title = '';
  author = '';
  date = '';
  url = '';
  summary = '';
  content = '';
  draft = true;

  constructor(thought?: any) {
    for (const prop in thought) {
      if (this.hasOwnProperty(prop)) {
        this[prop] = thought[prop];
      }
    }
  }
}
