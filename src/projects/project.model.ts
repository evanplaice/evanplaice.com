export class ProjectModel {
  name = '';
  title = '';
  category = '';
  role = '';
  link = '';
  description = '';

  constructor(project) {
    if (project) {
      this.init(project);
    }
  }

  init(project) {
    if (project.name) {
      this.name = project.name;
    }

    if (project.title) {
      this.title = project.title;
    }

    if (project.category) {
      this.category = project.category;
    }

    if (project.role) {
      this.role = project.role;
    }

    if (project.link) {
      this.link = project.link;
    }

    if (project.description) {
      this.description = project.description;
    }
  }
}
