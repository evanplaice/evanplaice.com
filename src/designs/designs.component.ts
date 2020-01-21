import { Component } from '@angular/core';
import { DesignsService } from './designs.service';

@Component({
  selector: 'designs',
  templateUrl: './designs.component.html',
})
export class DesignsComponent {
  designs;

  constructor (private designsService: DesignsService) {
    designsService.designs$.subscribe(update => this.designs = update);
    designsService.getDesigns();
  }
}
