import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogScreen from '../Screens/LoginScreen/LogScreen';
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen';
import ForgotPassword from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen';
import Home from '../Screens/HomeScreen';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogScreen" component={LogScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
