import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import DashboardProvider from './components/Dashboard/DashboardProvider';
import RootStore from './models/RootStore';

const rootStore = new RootStore();

class App extends Component {
  render() {
    return (
      <Provider {...rootStore.getStores()}>
        <DashboardProvider />
      </Provider>
    );
  }
}

export default App;
