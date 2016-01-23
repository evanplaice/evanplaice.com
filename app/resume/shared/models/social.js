export class SocialModel {
  label = '';
  network = '';
  user = '';
  url = '';

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.label) {
      this.label = obj.label;
    }

    if (obj.network) {
      this.network = obj.network;
    }

    if (obj.user) {
      this.user = obj.user;
    }

    if (obj.url) {
      this.url = obj.url;
    }
  }
}
