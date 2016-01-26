export class SampleModel {
  title = '';
  summary = '';
  url = '';
  date = '';
  highlights = [];
  keywords = [];

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.title) {
      this.title = obj.title;
    }

    if (obj.summary) {
      this.summary = obj.summary;
    }

    if (obj.url) {
      this.url = obj.url;
    }

    if (obj.date) {
      this.date = obj.date;
    }

    if (obj.highlights) {
      obj.highlights.forEach((highlight) => {
        this.highlights.push(highlight);
      });
    }

    if (obj.keywords) {
      obj.keywords.forEach((keyword) => {
        this.keywords.push(keyword);
      });
    }
  }
}
