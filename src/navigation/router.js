import React from 'react';
import { TabNavigator } from 'react-navigation';
import CalendarPresenter from '@mobile/screens/CalendarPresenter';
import LoginPresenter from '@mobile/screens/LoginPresenter';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const defaultIconSetting = {
  iconawesome: null,
};
export type IconTypes = {
  iconawesome?: string
};

export const Tabs = TabNavigator(
  {
    Talks: {
      screen: CalendarPresenter,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name='calendar' size={25} color={tintColor} />
        ),
      },
    },
    WishList: {
      screen: LoginPresenter,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name='star' size={25} color={tintColor} />
        ),
      },
    },
    Create: {
      screen: LoginPresenter,
      navigationOptions: {
        tabBarLabel: 'Create',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name='plus' size={25} color={tintColor} />
        ),
      },
    },
    Checklist: {
      screen: LoginPresenter,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            name='playlist-add-check'
            size={30}
            color={tintColor}
          />
        ),
      },
    },
    Settings: {
      screen: LoginPresenter,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name='settings' size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
    lazy: true,
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: 'bottom',
  }
);
