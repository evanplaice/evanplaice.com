import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
    nav {
      font-size: 1.3rem;
      font-weight: bolder;
      margin-top: 10px;
    }
  `]
})
export class FooterComponent {
  constructor() {}
}
