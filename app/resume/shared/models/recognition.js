export class RecognitionModel {
  category = '';
  title = '';
  date = '';
  from = '';
  summary = '';
  url = '';

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.category) {
      this.category = obj.category;
    }

    if (obj.title) {
      this.title = obj.title;
    }

    if (obj.date) {
      this.date = obj.date;
    }

    if (obj.from) {
      this.from = obj.from;
    }

    if (obj.summary) {
      this.summary = obj.summary;
    }

    if (obj.url) {
      this.url = obj.url;
    }
  }
}
