export class LocationModel {
  address = '';
  city = '';
  region = '';
  code = '';
  country = '';

  constructor (location) {
    this.address = location.address;
    this.city = location.city;
    this.region = location.region;
    this.code = location.code;
    this.country = location.country;
  }
}
