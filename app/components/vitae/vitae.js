import {
  Component,
  View
} from 'angular2/core';

@Component({
  selector: 'vitae'
})
@View({
  templateUrl: 'app/components/vitae/vitae.html'
})
export class VitaeComponent {
  constructor () {
    console.log('vitae');
  }
}
