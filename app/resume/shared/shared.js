// Shared template partials
import { HeaderComponent } from './components/header';
import { DurationComponent } from './components/duration';
import { HighlightsComponent } from './components/highlights';
import { CurriculumComponent } from './components/curriculum.js';
import { KeywordsComponent } from './components/keywords';

// Shared template models
import { LocationModel } from './models/location';
import { EmploymentModel } from './models/employment';
import { ProjectModel } from './models/project';
import { EducationModel } from './models/education';
import { RecognitionModel } from './models/recognition';
import { WritingModel } from './models/writing';
import { SpeakingModel } from './models/speaking';
import { SampleModel } from './models/sample';
import { ReferenceModel } from './models/reference';
import { TestimonialModel } from './models/testimonial';

// Shared template pipes
import { DerpPipe } from './pipes/derp';

export const TEMPLATE_DIRECTIVES = [
  HeaderComponent,
  DurationComponent,
  HighlightsComponent,
  CurriculumComponent,
  KeywordsComponent
];

export const TEMPLATE_MODELS = [
  LocationModel,
  EmploymentModel,
  ProjectModel,
  EducationModel,
  RecognitionModel,
  WritingModel,
  SpeakingModel,
  SampleModel,
  ReferenceModel,
  TestimonialModel
];

export const TEMPLATE_PIPES = [
  DerpPipe
];
