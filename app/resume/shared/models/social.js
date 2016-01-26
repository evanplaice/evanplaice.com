export class SocialModel {
  network = '';
  user = '';
  url = '';
  label = '';

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {

    if (obj.network) {
      this.network = obj.network;
    }

    if (obj.user) {
      this.user = obj.user;
    }

    if (obj.url) {
      this.url = obj.url;
    }

    if (obj.label) {
      this.label = obj.label;
    }
  }
}
