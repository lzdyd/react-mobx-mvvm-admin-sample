import React from 'react';
import { inject } from 'mobx-react';
import DashboardController from './DashboardController';
import DashboardViewModel from './DashboardViewModel';
import RootStore from '../../models/RootStore';

@inject(RootStore.type.DASHBOARD_MODEL)
class DashboardProvider extends React.Component {
  constructor(props) {
    super(props);
    const dashboardModel = props[RootStore.type.DASHBOARD_MODEL];
    this.viewModel = new DashboardViewModel(dashboardModel);
  }

  render() {
    return <DashboardController viewModel={this.viewModel} />;
  }
}

export default DashboardProvider;
