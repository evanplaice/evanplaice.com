import { Component } from '@angular/core';

@Component({
  selector: 'app-vitae',
  templateUrl: './vitae.component.html',
  styles: [`
    wc-resume {
      width: 800px;
      margin: 0 auto 1em auto;
    }

    #resume {
      width: auto;
      padding: 1.5em 3em 1.5em 3em;
      border: 1px solid #ddd;
    }

    #resume div {
      display: flex;
      justify-content: space-evenly;
    }

    #resume a {
      display: flex;
      font-weight: 600;
    }

    /* Not Mobile */
    @media screen and (min-width: 480px) {
      #resume hr {
        display: none;
      }
    }

    /* Mobile */
    @media screen and (min-width: 0px) and (max-width: 480px) {
      wc-resume {
        display: none;
      }

      #resume div {
        flex-direction: column;
      }

      #resume a {
        justify-content: center;
      }

      #resume hr {
        display: block;
      }
    }
  `]
})
export class VitaeComponent {}
