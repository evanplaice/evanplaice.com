import { Component } from '@angular/core';

@Component({
  selector: 'typefaces',
  templateUrl: 'app/typefaces/typefaces.component.html'
})
export class TypefacesComponent {
  constructor () {
    this.src = 'content/typefaces/typefaces.md';
  }
}

