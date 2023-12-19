import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {COLOR, ICON} from '../../component/Constant';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Profile from './Profile';
import Explore from './Explore';
import NewsDetail from './NewsDetail';
import ChangePassword from './ChangePassword';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackHomes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>
  );
};

const StackExplore = () => {
  return (
    <Stack.Navigator
      initialRouteName="Explore"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>
  );
};

const StackProfile = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLOR.primary,
        tabBarInactiveTintColor: COLOR.detail,
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeMain"
        component={StackHomes}
        options={({route}) => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={focused ? ICON.home_f : ICON.home}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        })}
      />
      <Tab.Screen
        name="ExploreMain"
        component={StackExplore}
        options={({route}) => ({
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={focused ? ICON.explore_f : ICON.explore}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        })}
      />
      <Tab.Screen
        name="ProfileMain"
        component={StackProfile}
        options={({route}) => ({
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={focused ? ICON.user_f : ICON.user}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
