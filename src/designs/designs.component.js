import { Component, Inject } from '@angular/core';
import { DesignsService } from './designs.service';
import template from './designs.component.html'


@Component({
  selector: 'designs',
  injectables: [ DesignsService ],
  template: template
})
export class DesignsComponent {
  constructor (@Inject(DesignsService) designsService) {
    // link to the designs data
    designsService.designs$.subscribe(update => this.designs = update);
    designsService.getDesigns();
  }
}
