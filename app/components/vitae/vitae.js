import {
  Component,
  View
} from 'angular2';

@Component ({
  selector: 'vitae'
})
@View ({
  templateUrl: 'app/components/vitae/vitae.html'
})
export class VitaeComponent {
  constructor() {
    console.log('vitae')
  }
}