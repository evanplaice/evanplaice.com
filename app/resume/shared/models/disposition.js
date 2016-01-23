export class DispositionModel {
  travel = 0;
  authorization = '';
  commitment = [];
  remote;
  relocation = {};

  constructor (obj) {
    if (obj) {
      this.init(obj);
    }
  }

  init (obj) {
    if (obj.travel) {
      this.travel = obj.travel;
    }

    if (obj.authorization) {
      this.authorization = obj.authorization;
    }

    if (obj.commitment) {
      obj.commitment.forEach((item) => {
        this.commitment.push(item);
      });
    }

    if (obj.remote !== undefined) {
      this.remote = obj.remote;
    }

    if (obj.relocation) {
      let tmp = {};

      if (obj.relocation.willing) {
        tmp.willing = obj.relocation.willing;
      }

      if (obj.relocation.destinations) {
        tmp.destinations = obj.relocation.destinations;
      }

      this.relocation = tmp;
    }
  }
}