import { Component, View } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'footer'
})
@View({
  templateUrl: 'app/main/components/footer.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class FooterComponent {
  constructor () {
    // console.log('footer');
  }
}
