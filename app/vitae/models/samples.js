export class SamplesModel {
  title = "";
  summary = "";
  url = "";
  date = "";

  constructor(obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init(obj) {
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
  }
}
