export class MetaModel {
  format = '';
  version = '';

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.format) {
      this.format = obj.format;
    }

    if (obj.version) {
      this.version = obj.version;
    }
  }
}
