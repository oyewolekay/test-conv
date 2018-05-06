import React from 'react';
import { StackNavigator, DrawerNavigator, SwitchNavigator } from 'react-navigation';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import AuthLoading from './components/AuthLoading';

const AppStack = DrawerNavigator({ 
    DashboardVw: Dashboard,
    ProfileVw: Profile,
});

const AuthStack = StackNavigator({ 
    SignInVw: SignIn,
    SignUpVw: SignUp,
});
  
export default SwitchNavigator(
    {
        AuthLoadingVw: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoadingVw',
    }
);