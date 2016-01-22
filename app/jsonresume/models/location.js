export class LocationModel {
  address = '';
  postalCode = '';
  city = '';
  countryCode = '';
  region = '';

  constructor (location) {
    this.address = location.address;
    this.postalCode = location.postalCode;
    this.city = location.city;
    this.countryCode = location.countryCode;
    this.region = location.region;
  }
}
