export class DesignModel {
  name = '';
  title = '';
  link = '';
  styleguide = '';
  description ='';
  images = [];

  constructor (design) {
    if (design) {
      this.name = design.name;
      this.title = design.title;
      this.link = design.link;
      this.styleguide = design.styleguide;
      this.description = design.description;
      this.images = design.images;
    }
  }
}
