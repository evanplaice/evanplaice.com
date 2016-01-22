import { ProjectsModel } from './projects';

export class FreshModel {
  name = '';
  meta = {};
  info = {};
  disposition = {};
  contact = {};
  location = {};
  employment = {};
  projects = [];
  skills = {};
  service = {};
  education = {};
  social = [];
  recognition = [];
  writing = [];
  reading = [];
  speaking = [];
  governance = [];
  languages = [];
  samples = [];
  references = [];
  testimonials = [];
  interests = [];
  extracurricular = [];
  affiliation = {};

  constructor (obj) {
    // initialize with data
    if (obj) {
      this.init(obj);
    }
  }

  init(obj) {
    if (obj.name) {
      this.name = obj.name;
    }

    if (obj.meta) {
      this.meta = obj.meta;
    }

    if (obj.info) {
      this.info = obj.info;
    }

    if (obj.disposition) {
      this.disposition = obj.disposition;
    }

    if (obj.contact) {
      this.contact = obj.contact;
    }

    if (obj.location) {
      this.location = obj.location;
    }

    if (obj.employment) {
      this.employment = obj.employment;
    }

    if (obj.projects) {
      obj.projects.forEach((project) => {
        this.projects.push(new ProjectsModel(project));
      });
    }

    if (obj.skills) {
      this.skills = obj.skills;
    }

    if (obj.service) {
      this.service = obj.service;
    }

    if (obj.education) {
      this.education = obj.education;
    }

    if (obj.social) {
      this.social = obj.social;
    }

    if (obj.recognition) {
      this.recognition = obj.recognition;
    }

    if (obj.writing) {
      this.writing = obj.writing;
    }

    if (obj.reading) {
      this.reading = obj.reading;
    }

    if (obj.speaking) {
      this.speaking = obj.speaking;
    }

    if (obj.governance) {
      this.governance = obj.governance;
    }

    if (obj.languages) {
      this.languages = obj.languages;
    }

    if (obj.samples) {
      this.samples = obj.samples;
    }

    if (obj.references) {
      this.references = obj.references;
    }

    if (obj.testimonials) {
      this.testimonials = obj.testimonials;
    }

    if (obj.interests) {
      this.interests = obj.interests;
    }

    if (obj.extracurricular) {
      this.extracurricular = obj.extracurricular;
    }

    if (obj.affiliation) {
      this.affiliation = obj.affiliation;
    }
  }
}
