import { observable, action } from 'mobx';

class DashboardModel {
  @observable data = [];

  @action addValue(val) {
    this.data.push(val);
  }

  getData() {
    return this.data;
  }
}

export default DashboardModel;
