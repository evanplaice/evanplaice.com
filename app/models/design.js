export class DesignModel {
  title = '';
  link = '';
  styleguide = '';
  description ='';
  images = [];

  constructor(item) {
    this.title = item.title;
    this.link = item.link;
    this.styleguide = item.styleguide;
    this.description = item.description;
    this.images = item.images;
  }
}