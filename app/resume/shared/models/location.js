export class LocationModel {
  address = '';
  code = '';
  city = '';
  region = '';
  country = '';

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.address) {
      this.address = obj.address;
    }

    if (obj.code) {
      this.code = obj.code;
    }

    if (obj.city) {
      this.city = obj.city;
    }

    if (obj.country) {
      this.country = obj.country;
    }

    if (obj.region) {
      this.region = obj.region;
    }
  }
}
