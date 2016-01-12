import { Component, View, Inject } from 'angular2/core';
import { DesignComponent } from 'app/components/design/design';
import { DesignService } from 'app/services/design';

@Component({
  selector: 'designs',
  injectables: [ DesignService ]
})
@View({
  templateUrl: 'app/components/designs/designs.html',
  directives: [ DesignComponent ]
})
export class DesignsComponent {
  constructor (@Inject(DesignService) designService) {
    // console.log('designs');

    // fetch the design data
    this.designs = designService.getDesigns();
  }
}
