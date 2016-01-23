export class ExtracurricularModel {
  title = '';
  activity = '';
  location = '';
  start = '';
  end = '';

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.title) {
      this.title = obj.title;
    }

    if (obj.activity) {
      this.activity = obj.activity;
    }

    if (obj.location) {
      this.location = obj.location;
    }

    if (obj.start) {
      this.start = obj.start;
    }

    if (obj.end) {
      this.end = obj.end;
    }
  }
}
