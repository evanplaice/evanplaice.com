export class _SampleModel {
  name = '';

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.name) {
      this.name = obj.name;
    }
  }
}
