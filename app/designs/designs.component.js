import { Component, Inject } from '@angular/core';
import { DesignsService } from 'app/designs/designs.service';

@Component({
  selector: 'designs',
  injectables: [ DesignsService ],
  templateUrl: 'app/designs/designs.component.html'
})
export class DesignsComponent {
  constructor (@Inject(DesignsService) designsService) {
    // link to the designs data
    designsService.designs$.subscribe(update => this.designs = update);
    designsService.getDesigns();
  }
}
