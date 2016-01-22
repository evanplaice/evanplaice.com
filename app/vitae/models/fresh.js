import { ProjectsModel } from './projects';
import { RecognitionModel } from './recognition';
import { WritingModel } from './writing';
import { SpeakingModel } from './speaking';
import { SamplesModel } from './samples';
import { ReferencesModel } from './references';
import { TestimonialsModel } from './testimonials';

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
      console.log(this);
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
      obj.recognition.forEach((award) => {
        this.recognition.push(new RecognitionModel(award));
      });
    }

    if (obj.writing) {
      obj.writing.forEach((piece) => {
        this.writing.push(new WritingModel(piece));
      })
    }

    if (obj.reading) {
      this.reading = obj.reading;
    }

    if (obj.speaking) {
      obj.speaking.forEach((talk) => {
        this.speaking.push(new SpeakingModel(talk));
      })
    }

    if (obj.governance) {
      this.governance = obj.governance;
    }

    if (obj.languages) {
      this.languages = obj.languages;
    }

    if (obj.samples) {
      obj.samples.forEach((sample) => {
        this.samples.push(new SamplesModel(sample));
      })
    }

    if (obj.references) {
      obj.references.forEach((reference) => {
        this.references.push(new ReferencesModel(reference));
      });
    }

    if (obj.testimonials) {
      obj.testimonials.forEach((testimonial) => {
        this.testimonials.push(new TestimonialsModel(testimonial));
      });
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
