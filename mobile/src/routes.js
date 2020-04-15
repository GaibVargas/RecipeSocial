import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Register from './pages/Register';
import TabRoutes from './routes/tab.routes';

const Stack = createStackNavigator();

export default function Routes() {

  return (
    <>
    <StatusBar backgroundColor={'#9c0c0c'} barStyle={'light-content'} />
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Tab" component={TabRoutes} />
      </> 
    </Stack.Navigator>
    </>
  );
}
