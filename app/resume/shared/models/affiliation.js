export class AffiliationModel {
  summary = '';
  history = [];

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.summary) {
      this.summary = obj.summary;
    }

    if (obj.history) {
      obj.history.forEach((association) => {
        this.addAssociation(association);
      });
    }
  }

  addAssociation(assoc) {
    let tmp = {};

    if (assoc.category) {
      tmp.category = assoc.category;
    }

    if (assoc.organization) {
      tmp.organization = assoc.organization;
    }

    if (assoc.role) {
      tmp.role = assoc.role;
    }

    if (assoc.url) {
      tmp.url = assoc.url;
    }

    if (assoc.start) {
      tmp.start = assoc.start;
    }

    if (assoc.end) {
      tmp.end = assoc.end;
    }

    if (assoc.summary) {
      tmp.summary = assoc.summary;
    }

    if (assoc.highlights) {
      tmp.highlights = [];

      assoc.highlights.forEach((highlight) => {
        tmp.highlights.push(highlight);
      });
    }

    this.history.push(tmp);
  }
}
