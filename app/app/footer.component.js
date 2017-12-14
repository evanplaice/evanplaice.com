import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

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
