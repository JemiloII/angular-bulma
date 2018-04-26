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
    this.setOptions('arrow', value);
  };

  @Input('has-bullet-separator')
  public set bullet(value: string) {
    this.setOptions('bullet', value);
  };

  @Input('has-dot-separator')
  public set dot(value: string) {
    this.setOptions('dot', value);
  };

  @Input('has-succeeds-separator')
  public set succeeds(value: string) {
    this.setOptions('succeeds', value);
  };

  @Input('is-centered')
  public set centered(value: string) {
    this.setOptions('centered', value);
  };

  @Input('is-right')
  public set right(value: string) {
    this.setOptions('right', value);
  };

  constructor() { }

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

  private setOptions(name, value) {
    this.options[name] = value === '' || JSON.parse(value);
  }

  ngOnInit() {
    if (this.align) {
      this.options[this.align === 'center' ? 'centered' : this.align] = true;
    }

    if (this.separator) {
      this.options[this.separator] = true;
    }
  }

}
