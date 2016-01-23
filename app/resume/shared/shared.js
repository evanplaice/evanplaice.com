// shared directives
import { ContactsComponent } from './components/contacts';
import { CurriculumComponent } from './components/curriculum';
import { DurationComponent } from './components/duration';
import { HeaderComponent } from './components/header';
import { HighlightsComponent } from './components/highlights';
import { KeywordsComponent } from './components/keywords';

// shared models
import { InfoModel } from './models/info';
import { MetaModel } from './models/meta';
import { DispositionModel } from './models/disposition';
import { ContactModel } from './models/contact';
import { LocationModel } from './models/location';
import { EmploymentModel } from './models/employment';
import { ProjectModel } from './models/project';
import { SkillsModel } from './models/skills';
import { ServiceModel } from './models/service';
import { EducationModel } from './models/education';
import { SocialModel } from './models/social';
import { RecognitionModel } from './models/recognition';
import { WritingModel } from './models/writing';
import { ReadingModel } from './models/reading';
import { SpeakingModel } from './models/speaking';
import { GovernanceModel } from './models/governance';
import { LanguagesModel } from './models/language';
import { SampleModel } from './models/sample';
import { ReferenceModel } from './models/reference';
import { TestimonialModel } from './models/testimonial';
import { InterestModel } from './models/interest';
import { ExtracurricularModel } from './models/extracurricular';
import { AffiliationModel } from './models/affiliation';

// shared pipes
import { DerpPipe } from './pipes/derp';
import { NoLastPipe } from './pipes/no-last';

export const TEMPLATE_DIRECTIVES = [
  ContactsComponent,
  CurriculumComponent,
  DurationComponent,
  HeaderComponent,
  HighlightsComponent,
  KeywordsComponent
];

export const TEMPLATE_MODELS = [
  InfoModel,
  MetaModel,
  DispositionModel,
  ContactModel,
  LocationModel,
  EmploymentModel,
  ProjectModel,
  SkillsModel,
  ServiceModel,
  EducationModel,
  SocialModel,
  RecognitionModel,
  WritingModel,
  ReadingModel,
  SpeakingModel,
  GovernanceModel,
  LanguagesModel,
  SampleModel,
  ReferenceModel,
  TestimonialModel,
  InterestModel,
  ExtracurricularModel,
  AffiliationModel
];

export const TEMPLATE_PIPES = [
  DerpPipe,
  NoLastPipe,
];
