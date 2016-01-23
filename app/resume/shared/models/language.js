export class LanguageModel {
  language = '';
  level = '';
  years = '';

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.language) {
      this.language = obj.language;
    }

    if (obj.level) {
      this.level = obj.level;
    }

    if (obj.years) {
      this.years = obj.years;
    }
  }
}
