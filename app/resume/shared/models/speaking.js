export class SpeakingModel {
  title = '';
  event = '';
  location = '';
  date = '';
  highlights = [];

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

    if (obj.highlights) {
      obj.highlights.forEach((highlight) => {
        this.highlights.push(highlight);
      });
    }
  }
}
