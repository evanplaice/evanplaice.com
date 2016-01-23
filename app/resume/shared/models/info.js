export class InfoModel {
  label = '';
  class = '';
  image = '';
  brief = '';
  quote = '';

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.label) {
      this.label = obj.label;
    }

    if (obj.class) {
      this.class = obj.class;
    }

    if (obj.image) {
      this.image = obj.image;
    }

    if (obj.brief) {
      this.brief = obj.brief;
    }

    if (obj.quote) {
      this.quote = obj.quote;
    }
  }
}
