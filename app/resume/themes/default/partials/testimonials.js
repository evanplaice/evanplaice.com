import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'app/resume/themes/default/default';

@Component({
  selector: 'testimonials',
  inputs: [ 'testimonials' ]
})
@View({
  template: `
  <hr>
  <section id="testimonials">
    <header title="Testimonials"><span class="fa fa-lg fa-thumbs-o-up"></span></header>
    <div *ngFor="#testimonial of testimonials | derp">
      <h3>{{ testimonial.name }}</h3>
      <p>{{ testimonial.quote }}</p>
    </div>
  </section>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class TestimonialsComponent {}
