import {
	Component,
	View
} from 'angular2';

@Component({
	selector: 'app'
})
@View({
	templateUrl: 'app/components/main/main.html',
})
export class MainComponent {
	constructor() {
	  this.title = 'test';
	}
}