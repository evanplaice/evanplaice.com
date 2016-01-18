// Default template components
import { HeaderComponent } from './components/header';
import { DurationComponent } from './components/duration';
import { HighlightsComponent } from './components/highlights';
import { CurriculumComponent } from './components/curriculum.js';
import { KeywordsComponent } from './components/keywords';

import { DerpPipe } from '../../pipes/derp';

export const TEMPLATE_DIRECTIVES = [
  HeaderComponent,
  DurationComponent,
  HighlightsComponent,
  CurriculumComponent,
  KeywordsComponent
];

export const TEMPLATE_PIPES = [
  DerpPipe
];
