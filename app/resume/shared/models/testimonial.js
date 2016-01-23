export class TestimonialModel {
  name = '';
  quote = '';
  flavor = '';
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

    if (obj.flavor) {
      this.flavor = obj.flavor;
    }

    if (obj.private !== undefined) {
      this.private = obj.private;
    }
  }
}
