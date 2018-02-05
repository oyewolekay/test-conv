import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';

import SplashScreen from './components/SplashScreen';

import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
// import Authenticate from './components/Authenticate';

// import Connections from './components/Connections';
// import FindConnections from './components/FindConnections';
// import Profile from './components/Profile';
// import EditProfile from './components/EditProfile';
// import Converze from './components/Converze';
// import Notifications from './components/Notifications';

const StackRouteConfig = {
    Splash: { screen: SplashScreen, },
    Welcome: { screen: Welcome, },
    SignUp: { screen: SignUp, },
};
const StackNavigatorConfig = {
    initialRouteName: 'Splash',
    headerMode: 'none',
};
const RootStack = StackNavigator(StackRouteConfig, StackNavigatorConfig);

class App extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}

export default App;
