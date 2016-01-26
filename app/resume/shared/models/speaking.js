export class SpeakingModel {
  title = '';
  event = '';
  location = '';
  date = '';
  summary = '';
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

    if (obj.event) {
      this.event = obj.event;
    }

    if (obj.location) {
      this.location = obj.location;
    }

    if (obj.date) {
      this.date = obj.date;
    }

    if (obj.summary) {
      this.summary = obj.summary;
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
