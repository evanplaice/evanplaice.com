import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
    footer {
      display: flex;
      justify-content: center;
      padding: 1em;
      border-top: 1px solid #ddd;
    }

    svg {
      width: 15px;
      height: 15px;
      fill: #4183c4;
      vertical-align: sub;
      margin-left: 3px;
      margin-right: 3px;
    }

    nav {
      display: flex;
      justify-content: center;
      font-size: 1.4rem;
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
      color: #666;
    }

    span:last-child::after {
      content: none;
    }

    @media screen and (min-width: 0px) and (max-width: 414px) {
      footer {
        font-size: .8rem;
        font-weight: bold;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  constructor() {}
}
