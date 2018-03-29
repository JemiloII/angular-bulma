import { Component } from '@angular/core';
import { BreadcrumbsLink } from "./modules/breadcrumbs/breadcrumbs.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  links: BreadcrumbsLink[] = [
    {
      name: 'Home',
      url: '/',
      icon: {
        name: 'home',
        size: 'medium',
        type: 'fas'
      }
    },
    {
      name: 'Parent',
      url: '/parent'
    },
    {
      name: 'No Link',
      url: ''
    },
    {
      name: 'Current'
    }
  ];
}
