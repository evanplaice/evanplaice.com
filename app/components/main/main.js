import {
	Component,
	View
} from 'angular2';
import { HeaderComponent } from 'app/components/header/header';


@Component({
	selector: 'app'
})
@View({
	directives: [
		HeaderComponent
	],
	templateUrl: 'app/components/main/main.html',
})
export class MainComponent {
	constructor() {
	  this.title = 'test';
	}
}