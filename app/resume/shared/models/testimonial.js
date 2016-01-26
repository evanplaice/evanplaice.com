export class TestimonialModel {
  name = '';
  quote = '';
  category = '';
  private;

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.name) {
      this.name = obj.name;
    }

    if (obj.quote) {
      this.quote = obj.quote;
    }

    if (obj.category) {
      this.category = obj.category;
    }

    if (obj.private !== undefined) {
      this.private = obj.private;
    }
  }
}
