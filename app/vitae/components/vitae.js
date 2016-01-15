import { Component, View, Inject } from 'angular2/core';
import { MarkdownComponent } from 'ng2-markdown-component';
import { VitaeService } from 'app/vitae/services/vitae';
import { DerpPipe } from 'app/vitae/pipes/derp';

@Component({
  selector: 'vitae',
  injectables: [ VitaeService ]
})
@View({
  templateUrl: 'app/vitae/components/vitae.html',
  directives: [ MarkdownComponent ],
  pipes: [ DerpPipe ]
})
export class VitaeComponent {
  constructor (@Inject(VitaeService) vitaeService) {
    // console.log('vitae');

    // initialize the data (ie to avoid uninitialized errors)
    vitaeService.vitae$.subscribe(update => this.vitae = update);
    vitaeService.getVitae();
  }
}
