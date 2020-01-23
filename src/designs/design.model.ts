export class DesignModel {
  name = '';
  title = '';
  link = '';
  styleguide = '';
  description = '';
  images = [];

  constructor(design) {
    if (design) {
      this.init(design);
    }
  }

  init(design) {
    if (design.name) {
      this.name = design.name;
    }

    if (design.title) {
      this.title = design.title;
    }

    if (design.link) {
      this.link = design.link;
    }

    if (design.styleguide) {
      this.styleguide = design.styleguide;
    }

    if (design.description) {
      this.description = design.description;
    }

    if (design.images) {
      this.images = design.images;
    }
  }
}
