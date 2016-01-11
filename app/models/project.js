export class ProjectModel {
  name = '';
  title = '';
  category = '';
  role = '';
  link = '';
  description ='';

  constructor (project) {
    this.name = project.name;
    this.title = project.title;
    this.category = project.category;
    this.role = project.role;
    this.link = project.link;
    this.description = project.description;
  }
}
