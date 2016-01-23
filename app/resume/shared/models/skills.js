export class SkillsModel {
  sets = [];
  list = [];

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.sets) {
      obj.sets.forEach((set) => {
        this.addSet(set);
      });
    }

    if (obj.list) {
      obj.list.forEach((skill) => {
        this.addSkill(skill);
      });
    }
  }

  addSet (set) {
    let tmp = {};

    if (set.name) {
      tmp.name = set.name;
    }

    if (set.level) {
      tmp.level = set.level;
    }

    if (set.skills) {
      tmp.skills = [];
      set.skills.forEach((skill) => {
        tmp.skills.push(skill);
      });
    }

    this.sets.push(tmp);
  }

  addSkill (skill) {
    let tmp = {};

    if (skill.name) {
      tmp.name = skill.name;
    }

    if (skill.level) {
      tmp.level = skill.level;
    }

    if (skill.summary) {
      tmp.summary = skill.summary;
    }

    if (skill.years) {
      tmp.years = skill.years;
    }

    this.list.push(tmp);
  }
}
