export class EducationModel {
  summary = '';
  level = '';
  degree = '';
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

    if (obj.level) {
      this.level = obj.level;
    }

    if (obj.degree) {
      this.degree = obj.degree;
    }

    if (obj.history) {
      obj.history.forEach((school) => {
        this.addSchool(school);
      });
    }
  }

  addSchool (school) {
    let tmp = {};

    if (school.title) {
      tmp.title = school.title;
    }

    if (school.institution) {
      tmp.institution = school.institution;
    }

    if (school.area) {
      tmp.area = school.area;
    }

    if (school.studyType) {
      tmp.studyType = school.studyType;
    }

    if (school.start) {
      tmp.start = school.start;
    }

    if (school.end) {
      tmp.end = school.end;
    }

    if (school.grade) {
      tmp.grade = school.grade;
    }

    if (school.curriculum) {
      tmp.curriculum = [];
      school.curriculum.forEach((subject) => {
        tmp.curriculum.push(subject);
      });
    }

    if (school.url) {
      tmp.url = school.url;
    }

    if (school.summary) {
      tmp.summary = school.summary;
    }

    if (school.location) {
      tmp.location = school.location;
    }

    if (school.highlights) {
      tmp.highlights = [];

      school.highlights.forEach((highlight) => {
        tmp.highlights.push(highlight);
      });
    }

    if (school.keywords) {
      tmp.keywords = [];

      school.keywords.forEach((keyword) => {
        tmp.keywords.push(keyword);
      });
    }

    this.history.push(tmp);
  }
}
