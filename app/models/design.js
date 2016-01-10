export class DesignModel {
  name = '';
  title = '';
  link = '';
  styleguide = '';
  description ='';
  images = [];

  constructor(item) {
    this.name = item.name;
    this.title = item.title;
    this.link = item.link;
    this.styleguide = item.styleguide;
    this.description = item.description;
    this.images = item.images;
  }
}