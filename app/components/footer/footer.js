import {
  Component,
  View
} from 'angular2';

@Component ({
  selector: 'footer'
})
@View ({
  templateUrl: 'app/components/footer/footer.html'
})
export class FooterComponent {
  constructor() {
    console.log('footer')
  }
}