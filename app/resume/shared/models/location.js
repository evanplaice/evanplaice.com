export class LocationModel {
  address = '';
  city = '';
  region = '';
  code = '';
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

    if (obj.city) {
      this.city = obj.city;
    }

    if (obj.region) {
      this.region = obj.region;
    }

    if (obj.code) {
      this.code = obj.code;
    }

    if (obj.country) {
      this.country = obj.country;
    }
  }
}
