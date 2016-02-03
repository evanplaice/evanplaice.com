import { Component, View, Inject } from 'angular2/core';
import { DesignComponent } from 'app/designs/components/design';
import { DesignsService } from 'app/designs/services/designs';

@Component({
  selector: 'designs',
  injectables: [ DesignsService ]
})
@View({
  templateUrl: 'app/designs/components/designs.html',
  directives: [ DesignComponent ]
})
export class DesignsComponent {
  constructor (@Inject(DesignsService) designsService) {
    // console.log('designs');
    // link to the designs data
    designsService.designs$.subscribe(update => this.designs = update);
    designsService.getDesigns();
  }
}
