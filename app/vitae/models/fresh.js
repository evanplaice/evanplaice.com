export class FRESHModel {
  name = '';
  meta = {};
  info = {};
  disposition = {};
  contact = {};
  location = {};
  employment = {};
  projects = {};
  skills = {};
  service = {};
  education = {};
  social = {};
  recognition = {};
  writing = {};
  reading = {};
  speaking = [];
  governance = [];
  languages = {};
  samples = [];
  references = [];
  testimonials = [];
  interests = [];
  extracurricular = [];
  affiliation = {};

  constructor (obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }
}
