import DashboardModel from './domain/DashboardModel';

class RootStore {
  static type = {
    DASHBOARD_MODEL: 'dashboardModel',
  };

  constructor() {
    this.dashboardModel = new DashboardModel();
  }

  getStores = () => ({
    [RootStore.type.DASHBOARD_MODEL]: this.dashboardModel,
  });
}

export default RootStore;
