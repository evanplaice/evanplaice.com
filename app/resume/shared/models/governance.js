export class GovernanceModel {
  summary = '';
  flavor = '';
  role = '';
  organization = '';
  start = '';
  end = '';
  highlights = [];

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.summary) {
      this.summary = obj.summary;
    }

    if (obj.flavor) {
      this.flavor = obj.flavor;
    }

    if (obj.role) {
      this.role = obj.role;
    }

    if (obj.organization) {
      this.organization = obj.organization;
    }

    if (obj.start) {
      this.start = obj.start;
    }

    if (obj.end) {
      this.end = obj.end;
    }

    if (obj.highlights) {
      obj.highlights.forEach((highlight) => {
        this.highlights.push(highlight);
      });
    }
  }
}
