import { Component } from 'angular-core';
import { ROUTER_DIRECTIVES } from 'router';

@Component({
  selector: 'footer',
  templateUrl: 'app/app/footer.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class FooterComponent {
  constructor () {
    // console.log('footer');
  }
}
