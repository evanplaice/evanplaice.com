// import { BasicsModel } from 'app/models/basics';
import { LocationModel } from 'app/vitae/models/resume/location';

export class ResumeModel {
  basics = {
    name: '',
    label: '',
    picture: '',
    email: '',
    phone: '',
    website: '',
    summary: '',
    location: {},
    profiles: []
  };
  work = [];
  volunteer = [];
  education = [];
  awards = [];
  publications = [];
  skills = [];
  languages = [];
  interests = [];
  references = [];

  constructor (json) {
    // this.basics = new BasicsModel(json.basics);
    this.basics.name = json.basics.name;
    this.basics.label = json.basics.label;
    this.basics.picture = json.basics.picture;
    this.basics.email = json.basics.email;
    this.basics.phone = json.basics.phone;
    this.basics.website = json.basics.website;
    this.basics.summary = json.basics.summary;
    // this.basics.location = new LocationModel(json.basics.location);
    this.basics.profiles = [];

    this.work = [];
    this.volunteer = [];
    this.education = [];
    this.awards = [];
    this.publications = [];
    this.skills = [];
    this.languages = [];
    this.interests = [];
    this.references = [];
  }
}
