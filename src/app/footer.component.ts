import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
    a {
      font-size: 1.2rem;
      font-weight: bolder;
    }

    nav {
      margin-top: 5px;
    }
  `]
})
export class FooterComponent {
  constructor() {}
}
