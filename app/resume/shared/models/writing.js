export class WritingModel {
  title = '';
  flavor = '';
  publisher = {};
  date = '';
  url = '';
  writing = '';

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

    if (obj.publisher) {
      if (obj.publisher.name) {
        this.publisher.name = obj.publisher.name;
      }
      if (obj.publisher.url) {
        this.publisher.url = obj.publisher.url;
      }
    }

    if (obj.date) {
      this.date = obj.date;
    }

    if (obj.url) {
      this.url = obj.url;
    }

    if (obj.writing) {
      this.writing = obj.writing;
    }
  }
}
