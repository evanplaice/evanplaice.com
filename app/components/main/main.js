import {
	Component,
	View
} from 'angular2';
import { HeaderComponent } from 'app/components/header/header';
import { FooterComponent } from 'app/components/footer/footer';


@Component({
	selector: 'app'
})
@View({
	directives: [
		HeaderComponent,
		FooterComponent
	],
	templateUrl: 'app/components/main/main.html',
})
export class MainComponent {
	constructor() {
	  this.title = 'test';
	}
}