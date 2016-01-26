export class ProjectModel {
  title = '';
  category = '';
  description = '';
  summary = '';
  role = '';
  url = '';
  media = [];
  repo = '';
  start = '';
  end = '';
  location = '';
  highlights = [];
  keywords = [];

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.title) {
      this.title = obj.title;
    }

    if (obj.category) {
      this.category = obj.category;
    }

    if (obj.description) {
      this.description = obj.description;
    }

    if (obj.summary) {
      this.summary = obj.summary;
    }

    if (obj.role) {
      this.role = obj.role;
    }

    if (obj.url) {
      this.url = obj.url;
    }

    if (obj.media) {
      obj.media.forEach((reference) => {
        this.addMedia(reference);
      });
    }

    if (obj.repo) {
      this.repo = obj.repo;
    }

    if (obj.start) {
      this.start = obj.start;
    }

    if (obj.end) {
      this.end = obj.end;
    }

    if (obj.location) {
      this.location = obj.location;
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

  addMedia(reference) {
    let tmp = {};

    if (reference.category) {
      tmp.category = reference.category;
    }

    if (reference.name) {
      tmp.name = reference.name;
    }

    if (reference.url) {
      tmp.url = reference.url;
    }

    this.media.push(tmp);
  }
}
