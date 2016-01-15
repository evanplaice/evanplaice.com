export class FRESHModel {
  name = '';
  meta = {};
  info = {};
  contact = {};
  location = {};
  social = {};
  employment = {};
  projects = {};
  education = {};
  service = {};
  skills = {};
  samples = {};
  writing = {};
  reading = {};
  recognition = {};
  references = {};
  testimonials = {};
  languages = {};
  interests = {};

  constructor (obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }
}
