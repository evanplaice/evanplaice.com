import { LocationModel } from './location';
import { EmploymentModel } from './employment';
import { ProjectModel } from './project';
import { EducationModel } from './education';
import { RecognitionModel } from './recognition';
import { WritingModel } from './writing';
import { SpeakingModel } from './speaking';
import { SampleModel } from './sample';
import { ReferenceModel } from './reference';
import { TestimonialModel } from './testimonial';

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
      // console.log(this);
    }
  }

  init (obj) {
    if (obj.name) {
      this.name = obj.name;
    }

    if (obj.meta) {
      // TODO: implement a model for this
      this.meta = obj.meta;
    }

    if (obj.info) {
      // TODO: implement a model for this
      this.info = obj.info;
    }

    if (obj.disposition) {
      // TODO: implement a model for this
      this.disposition = obj.disposition;
    }

    if (obj.contact) {
      // TODO: implement a model for this
      this.contact = obj.contact;
    }

    if (obj.location) {
      this.location = new LocationModel(obj.location);
    }

    if (obj.employment) {
      this.employment = new EmploymentModel(obj.employment);
    }

    if (obj.projects) {
      obj.projects.forEach((project) => {
        this.projects.push(new ProjectModel(project));
      });
    }

    if (obj.skills) {
      // TODO: implement a model for this
      this.skills = obj.skills;
    }

    if (obj.service) {
      // TODO: implelment a model for this
      this.service = obj.service;
    }

    if (obj.education) {
      this.education = new EducationModel(obj.education);
    }

    if (obj.social) {
      // TODO: implement a model for this
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
      });
    }

    if (obj.reading) {
      // TODO: implement a model for this
      this.reading = obj.reading;
    }

    if (obj.speaking) {
      obj.speaking.forEach((talk) => {
        this.speaking.push(new SpeakingModel(talk));
      });
    }

    if (obj.governance) {
      // TODO: implement a model for this
      this.governance = obj.governance;
    }

    if (obj.languages) {
      // TODO: implement a model for this
      this.languages = obj.languages;
    }

    if (obj.samples) {
      obj.samples.forEach((sample) => {
        this.samples.push(new SampleModel(sample));
      });
    }

    if (obj.references) {
      obj.references.forEach((reference) => {
        this.references.push(new ReferenceModel(reference));
      });
    }

    if (obj.testimonials) {
      obj.testimonials.forEach((testimonial) => {
        this.testimonials.push(new TestimonialModel(testimonial));
      });
    }

    if (obj.interests) {
      // TODO: implement a model for this
      this.interests = obj.interests;
    }

    if (obj.extracurricular) {
      // TODO: implement a model for this
      this.extracurricular = obj.extracurricular;
    }

    if (obj.affiliation) {
      // TODO: implement a model for this
      this.affiliation = obj.affiliation;
    }
  }
}
