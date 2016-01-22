export class ReferencesModel {
  name = "";
  role = "";
  category = "";
  private = false;
  summary = "";
  contact = [];

  constructor(obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init(obj) {
    if (obj.name) {
      this.name = obj.name;
    }

    if (obj.role) {
      this.role = obj.role;
    }

    if (obj.category) {
      this.category = obj.category;
    }

    if (obj.private === undefined) {
      this.private = obj.private;
    }

    if (obj.summary) {
      this.summary = obj.summary;
    }

    if (obj.contact) {
      obj.contact.forEach((contact) => {
        this.contact.push(contact);
      });
    }
  }
}
