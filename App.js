import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import DailyPic from './screens/DailyPic';
import StarMapScreen from './screens/StarMapScreen';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import { render } from 'react-dom';

export default class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
        }}>
          <Stack.screen name="Home" component={HomeScreen} />
          <Stack.screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
          <Stack.screen name="DailyPic" component={DailyPic}/>
          <Stack.screen name="StarMap" component={StarMapScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}