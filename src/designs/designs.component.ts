import { Component } from '@angular/core';
import { DesignModel } from './design.model';
import { DesignsService } from './designs.service';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html'
})
export class DesignsComponent {
  designs: DesignModel[];

  constructor(private designsService: DesignsService) {
    designsService.designs$.subscribe(update => this.designs = update);
    designsService.load();
  }
}
