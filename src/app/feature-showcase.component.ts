import { Component, ViewChildren, AfterViewInit } from '@angular/core';
import { EventService } from './lightbox/event.service';

@Component({
	selector: 'app-root',
	templateUrl: './feature-showcase.component.html',
	styleUrls: ['./feature-showcase.component.css']
})
export class FeatureShowcaseComponent {

	constructor(private eventService: EventService) {
        this.eventService.emitter.subscribe(
            (event) => {
                console.log(event);
            }
        );		
	}

	images = [
		{
			path: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/19a4ae25434871.563453b964a2b.jpg',
		},
		{
			path: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/7ac9f625434871.563453b97867a.jpg',
		},
		{
			path: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5f8a3c25434871.563453b95d980.jpg',
		},
		{
			path: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/d7550725434871.563453b951273.jpg',
		},
	];
}
