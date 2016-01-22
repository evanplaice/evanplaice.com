export class EmploymentModel {
  summary = "";
  history = [];

  constructor(obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init(obj) {
    if (obj.summary) {
      this.summary = obj.summary;
    }

    if (obj.history) {
      obj.history.forEach((job) => {
        this.addJob(job);
      });
    }
  }

  addJob(job) {
    let tmp = {};

    if (job.employer) {
      tmp.employer = job.employer;
    }

    if (job.position) {
      tmp.position = job.position;
    }

    if (job.url) {
      tmp.url = job.url;
    }

    if (job.start) {
      tmp.start = job.start;
    }

    if (job.end) {
      tmp.end = job.end;
    }

    if (job.summary) {
      tmp.summary = job.summary;
    }

    if (job.highlights) {
      tmp.highlights = [];
      job.highlights.forEach((highlight) => {
        tmp.highlights.push(highlight);
      });
    }

    if (job.location) {
      tmp.location = job.location;
    }

    if (job.keywords) {
      tmp.keywords = [];
      job.keywords.forEach((keyword) => {
        tmp.keywords.push(keyword);
      });
    }

    this.history.push(tmp);
  }
}
