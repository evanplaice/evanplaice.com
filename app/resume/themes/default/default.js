// Default template components
import { HeaderComponent } from './components/header';
import { DurationComponent } from './components/duration';
import { HighlightsComponent } from './components/highlights';
import { CurriculumComponent } from './components/curriculum.js';
import { KeywordsComponent } from './components/keywords';

// Default template partials
import { AboutComponent } from './partials/about';
import { EmploymentComponent } from './partials/employment';
import { ProjectsComponent } from './partials/projects';
// import { SkillsComponent } from './partials/skills';
import { ServiceComponent } from './partials/service';
import { EducationComponent } from './partials/education';
// import { SocialComponent } from './partials/social';
import { RecognitionComponent } from './partials/recognition';
import { WritingComponent } from './partials/writing';
// import { ReadingComponent } from './partials/reading';
import { SpeakingComponent } from './partials/speaking';
// import { GovernanceComponent } from './partials/governance';
// import { LanguagesComponent } from './partials/languages';
import { SamplesComponent } from './partials/samples';
import { ReferencesComponent } from './partials/references';
import { TestimonialsComponent } from './partials/testimonials';
// import { InterestsComponent } from './partials/interests';
// import { ExtracurricularComponent } from './partials/extracurricular';
// import { AffiliationComponent } from './partials/affiliation';

import { DerpPipe } from '../../pipes/derp';

export const TEMPLATE_DIRECTIVES = [
  HeaderComponent,
  DurationComponent,
  HighlightsComponent,
  CurriculumComponent,
  KeywordsComponent
];

export const TEMPLATE_PARTIALS = [
  AboutComponent,
  EmploymentComponent,
  ProjectsComponent,
  // SkillsComponent,
  ServiceComponent,
  EducationComponent,
  // SocialComponent,
  RecognitionComponent,
  WritingComponent,
  // ReadingComponent,
  SpeakingComponent,
  // GovernanceComponent,
  // LanguagesComponent,
  SamplesComponent,
  ReferencesComponent,
  TestimonialsComponent,
  // InterestsComponent,
  // ExtracurricularComponent,
  // AffiliationComponent
];

export const TEMPLATE_PIPES = [
  DerpPipe
];
