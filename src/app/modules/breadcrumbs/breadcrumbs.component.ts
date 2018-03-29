import { Component, Input, OnInit } from '@angular/core';
import { BreadcrumbsLink } from "./breadcrumbs.model";

@Component({
  selector: 'bulma-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: [
    './breadcrumbs.component.sass'
  ]
})
export class BreadcrumbsComponent implements OnInit {
  @Input() align: string;
  @Input() links: BreadcrumbsLink[] = [];
  @Input() separator: string;

  private options = {
    arrow: false,
    bullet: false,
    centered: false,
    dot: false,
    right: false,
    succeeds: false
  };

  @Input('has-arrow-separator')
  public set arrow(value: string) {
    console.log('value:', typeof value);
    this.options.arrow = value === '' || JSON.parse(value);
  };

  @Input('has-bullet-separator')
  public set bullet(value: string) {
    console.log('value:', typeof value);
    this.options.bullet = value === '' || JSON.parse(value);
  };

  @Input('has-dot-separator')
  public set dot(value: string) {
    console.log('value:', typeof value);
    this.options.dot = value === '' || JSON.parse(value);
  };

  @Input('has-succeeds-separator')
  public set succeeds(value: string) {
    console.log('value:', typeof value);
    this.options.succeeds = value === '' || JSON.parse(value);
  };

  @Input('is-centered')
  public set centered(value: string) {
    console.log('value:', typeof value);
    this.options.centered = value === '' || JSON.parse(value);
  };

  @Input('is-right')
  public set right(value: string) {
    console.log('value:', typeof value);
    this.options.right = value === '' || JSON.parse(value);
  };

  public get classList() {
    return {
      'has-arrow-separator': this.options.arrow,
      'has-bullet-separator': this.options.bullet,
      'has-dot-separator': this.options.dot,
      'has-succeeds-separator': this.options.succeeds,
      'is-centered': this.options.centered,
      'is-right': this.options.right
    };
  }

  public iconClassList(icon) {
    return {
      'is-small': icon.size === 'small',
      'is-medium': icon.size === 'medium',
      'is-large': icon.size === 'large',
    };
  }

  constructor() { }

  ngOnInit() {
    console.log('Links:', this.links);

    if (this.align) {
      this.options[this.align === 'center' ? 'centered' : this.align] = true;
    }

    if (this.separator) {
      this.options[this.separator] = true;
    }
  }

}
