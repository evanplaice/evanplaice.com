import {
  Component,
  View
} from 'angular2/core';

@Component ({
  selector: 'thoughts'
})
@View ({
  templateUrl: 'app/components/thoughts/thoughts.html'
})
export class ThoughtsComponent {
  constructor() {
    console.log('thoughts');
  }
}