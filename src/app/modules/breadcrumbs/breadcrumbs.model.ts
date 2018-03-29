export interface BreadcrumbsIcon {
  name?: string;
  size?: string;
  type?: string;
}

export interface BreadcrumbsLink {
  active?: boolean;
  icon?: BreadcrumbsIcon;
  name: string;
  url?: string;
}
