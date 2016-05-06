import { Component, View } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'footer',
  templateUrl: 'app/app/components/footer.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class FooterComponent {
  constructor () {
    // console.log('footer');
  }
}
