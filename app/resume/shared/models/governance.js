export class GovernanceModel {
  summary = '';
  category = '';
  role = '';
  organization = '';
  start = '';
  end = '';
  highlights = [];
  keywords = [];

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.summary) {
      this.summary = obj.summary;
    }

    if (obj.category) {
      this.category = obj.category;
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

    if (obj.keywords) {
      obj.keywords.forEach((keyword) => {
        this.keywords.push(keyword);
      });
    }
  }
}
