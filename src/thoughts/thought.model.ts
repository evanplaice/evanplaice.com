export class ThoughtModel {
  title: string = '';
  author: string = '';
  date: string = '';
  url: string = '';
  summary: string = '';
  content: string = '';
  draft: boolean = true;

  constructor(thought: any) {
    for (var prop in thought) {
      if (this.hasOwnProperty(prop)) {
        this[prop] = thought[prop];
      }
    }
  }
}
