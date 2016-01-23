export class ReadingModel {
  title = '';
  flavor = '';
  url = '';
  author = '';

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.title) {
      this.title = obj.title;
    }

    if (obj.flavor) {
      this.flavor = obj.flavor;
    }

    if (obj.url) {
      this.url = obj.url;
    }

    if (obj.author) {
      this.author = obj.author;
    }
  }
}
