export class ThoughtModel {
  title = '';
  author = '';
  date = '';
  url = '';
  summary = '';
  content = '';
  draft = true;


  constructor (thought) {
    if (thought) {
      this.init(thought);
    }
  }

  init(thought){
    if (thought.title) {
      this.title = thought.title;
    }

    if (thought.author) {
      this.author = thought.author;
    }

    if (thought.date) {
      this.date = thought.date;
    }

    if (thought.url) {
      this.url = thought.url;
    }

    if (thought.summary) {
      this.summary = thought.summary;
    }

    if (thought.content) {
      this.content = thought.content;
    }

    if (thought.draft !== undefined) {
      this.draft = thought.draft;
    }
  }
}
