export class SocialModel {
  label = '';
  network = '';
  user = '';
  url = '';

  constructor (profile) {
    this.label = profile.label;
    this.network = profile.network;
    this.user = profile.user;
    this.url = profile.url;
  }
}
