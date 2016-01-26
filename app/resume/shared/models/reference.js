export class ReferenceModel {
  name = '';
  role = '';
  category = '';
  private;
  summary = '';
  contact = [];

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.name) {
      this.name = obj.name;
    }

    if (obj.role) {
      this.role = obj.role;
    }

    if (obj.category) {
      this.category = obj.category;
    }

    if (obj.private !== undefined) {
      this.private = obj.private;
    }

    if (obj.summary) {
      this.summary = obj.summary;
    }

    if (obj.contact) {
      obj.contact.forEach((contact) => {
        this.addContact(contact);
      });
    }
  }

  addContact (contact) {
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

    this.contact.push(tmp);
  }
}
