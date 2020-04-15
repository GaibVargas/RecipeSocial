import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import New from '../pages/New';
import Recipe from '../pages/Recipe';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const [user, setUser] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('user_id').then(data => {
      setUser(data);
    });
  }, []);

  function handleProfileNavigation(user_id) {
    navigation.navigate('Owner', {
      user_id
    });
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Owner') {
            iconName = 'book';
          } else if(route.name === 'New') {
            iconName = 'pluscircleo';
          } else {
            return;
          }

          let color = focused ? '#c61111' : '#c4c4c4';

          if(route.name === 'Owner') {
            return <Icon name={iconName} size={30} color={color} onPress={() => handleProfileNavigation(user)} />
          } else {
            return <Icon name={iconName} size={30} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 60,
          borderTopColor: '#c61111',
          borderTopWidth: 1,
          backgroundColor: '#e5e5e5'
        },
        keyboardHidesTabBar: true
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Owner" component={Profile} />
      <Tab.Screen name="New" component={New} />
      <Tab.Screen 
        name="Recipe" 
        component={Recipe}
        options={{
          tabBarButton: () => null,
        }} />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarButton: () => null,
        }} />
    </Tab.Navigator>
  );
}
