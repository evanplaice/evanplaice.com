// shared directives
import { HeaderComponent } from './components/header';
import { DurationComponent } from './components/duration';
import { HighlightsComponent } from './components/highlights';
import { CurriculumComponent } from './components/curriculum.js';
import { KeywordsComponent } from './components/keywords';

// shared models
import { InfoModel } from './models/info';
import { DispositionModel } from './models/disposition';
import { ContactModel } from './models/contact';
import { LocationModel } from './models/location';
import { EmploymentModel } from './models/employment';
import { ProjectModel } from './models/project';
import { SkillsModel } from './models/skills';
import { EducationModel } from './models/education';
// import { SocialModel } from './models/social';
import { RecognitionModel } from './models/recognition';
import { WritingModel } from './models/writing';
// import { ReadingModel } from './models/reading';
import { SpeakingModel } from './models/speaking';
// import { GovernanceModel } from './models/governance';
// import { LanguagesModel } from './models/languages'
import { SampleModel } from './models/sample';
import { ReferenceModel } from './models/reference';
import { TestimonialModel } from './models/testimonial';
// import { InterestsModel } from './models/interests';
// import { ExtracurricularModel } from './models/extracurricular';
// import { AffiliationModel } from './models/affiliation';

// shared pipes
import { DerpPipe } from './pipes/derp';

export const TEMPLATE_DIRECTIVES = [
  HeaderComponent,
  DurationComponent,
  HighlightsComponent,
  CurriculumComponent,
  KeywordsComponent
];

export const TEMPLATE_MODELS = [
  InfoModel,
  DispositionModel,
  ContactModel,
  LocationModel,
  EmploymentModel,
  ProjectModel,
  SkillsModel,
  EducationModel,
  // SocialModel,
  RecognitionModel,
  WritingModel,
  // ReadingModel,
  SpeakingModel,
  // GovernanceModel,
  // LanguagesModel,
  SampleModel,
  ReferenceModel,
  TestimonialModel
  // InterestsModel,
  // ExtracurricularModel,
  // AffiliationModel
];

export const TEMPLATE_PIPES = [
  DerpPipe
];
