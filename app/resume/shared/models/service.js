export class ServiceModel {
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
      obj.history.forEach((role) => {
        this.addRole(role);
      });
    }
  }

  addRole (role) {
    let tmp = {};

    if (role.category) {
      tmp.category = role.category;
    }

    if (role.organization) {
      tmp.organization = role.organization;
    }

    if (role.position) {
      tmp.position = role.position;
    }

    if (role.url) {
      tmp.url = role.url;
    }

    if (role.start) {
      tmp.start = role.start;
    }

    if (role.end) {
      tmp.end = role.end;
    }

    if (role.summary) {
      tmp.summary = role.summary;
    }

    if (role.location) {
      tmp.location = role.location;
    }

    if (role.highlights) {
      tmp.highlights = [];

      role.highlights.forEach((highlight) => {
        tmp.highlights.push(highlight);
      });
    }

    if (role.keywords) {
      tmp.keywords = [];

      role.keywords.forEach((keyword) => {
        tmp.keywords.push(keyword);
      });
    }

    this.history.push(tmp);
  }
}
