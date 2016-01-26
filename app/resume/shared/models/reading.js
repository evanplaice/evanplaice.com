export class ReadingModel {
  title = '';
  category = '';
  url = '';
  author = '';
  date = '';
  summary = '';

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.title) {
      this.title = obj.title;
    }

    if (obj.category) {
      this.category = obj.category;
    }

    if (obj.url) {
      this.url = obj.url;
    }

    if (obj.author) {
      this.author = obj.author;
    }

    if (obj.date) {
      this.date = obj.date;
    }

    if (obj.summary) {
      this.summary = obj.summary;
    }
  }
}
