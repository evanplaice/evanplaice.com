import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
    nav {
      display: flex;
      justify-content: center;
      font-size: 1.3rem;
      font-weight: bolder;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    span {
      flex-direction: row;
    }

    span::after {
      content: '|';
      margin-left: 5px;
      margin-right: 5px;
    }

    span:last-child::after {
      content: none;
    }
  `]
})
export class FooterComponent {
  constructor() {}
}
