import { Component, Inject } from 'angular2/core';
import { DesignComponent } from 'app/designs/design.component';
import { DesignsService } from 'app/designs/designs.service';

@Component({
  selector: 'designs',
  injectables: [ DesignsService ],
  templateUrl: 'app/designs/designs.component.html',
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
