import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'testimonials',
  inputs: [ 'testimonials' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="testimonials">
    <header title="Testimonials"><span class="fa fa-lg fa-thumbs-o-up"></span></header>
    <div *ngFor="#testimonial of testimonials">
      <h3>{{ testimonial.name }}</h3>
      <p>{{ testimonial.quote }}</p>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class TestimonialsComponent {
  empty () {
    return this.testimonials.length === 0;
  }
}
