import {
	Component,
	View
} from 'angular2';
import {
	ROUTER_DIRECTIVES,
	ROUTER_PROVIDERS,
	RouteConfig
} from 'angular2/router';
import { HeaderComponent } from 'app/components/header/header';
import { FooterComponent } from 'app/components/footer/footer';
import { ThoughtsComponent } from 'app/components/thoughts/thoughts';
import { DesignsComponent } from 'app/components/designs/designs';
import { ProjectsComponent} from 'app/components/projects/projects';
import { VitaeComponent } from 'app/components/vitae/vitae';


@Component({
	selector: 'app'
})
@View({
	directives: [
		HeaderComponent,
		FooterComponent,
		ROUTER_DIRECTIVES
	],
	templateUrl: 'app/components/main/main.html',
})
@RouteConfig([
	{
		path: '/thoughts',
		component: ThoughtsComponent,
		as: 'Thoughts'
	},
	{
		path: '/designs',
		component: DesignsComponent,
		as: 'Designs'
	},
	{
		path: '/projects',
		component: ProjectsComponent,
		as: 'Projects'
	},
	{
		path: '/vitae',
		component: VitaeComponent,
		as: 'Vitae'
	},
	{
		path: '/',
		redirectTo: '/thoughts'
	}
])
export class MainComponent {
	constructor() {
	  this.title = 'test';
	}
}