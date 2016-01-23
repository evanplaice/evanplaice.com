export class ContactModel {
  email = '';
  phone = '';
  website = '';
  other = {};

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.email) {
      this.email = obj.email;
    }

    if (obj.phone) {
      this.phone = obj.phone;
    }

    if (obj.website) {
      this.website = obj.website;
    }

    if (obj.other) {
      let tmp = {};

      if (obj.other.label) {
        tmp.label = obj.other.label;
      }

      if (obj.other.flavor) {
        tmp.flavor = obj.other.flavor;
      }

      if (obj.other.value) {
        tmp.value = obj.other.value;
      }
    }
  }
}
