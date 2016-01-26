export class ContactModel {
  email = '';
  phone = '';
  website = '';
  other = [];

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
      obj.other.forEach((contact) => {
        this.addOther(contact);
      });
    }
  }

  addOther(contact) {
    let tmp = {};

    if (contact.label) {
      tmp.label = contact.label;
    }

    if (contact.category) {
      tmp.category = contact.category;
    }

    if (contact.value) {
      tmp.value = contact.value;
    }

    this.other.push(tmp);
  }
}
