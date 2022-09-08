import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import NewTweet from './Screens/NewTweet';
import ProfileScreen from './Screens/ProfileScreen';
import TweetScreen from './Screens/TweetScreen';
import SettingsScreen from './Screens/SettingsScreen';
import SearchScreen from './Screens/SearchScreen';
import NotificationsScreen from './Screens/NotificationsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();  


const HomeStackNavigator= () =>{
 return(
       <Stack.Navigator>
            <Stack.Screen name="Tab" component={TabNavgator}></Stack.Screen>
            <Stack.Screen name="New Tweet" component={NewTweet}></Stack.Screen>
            <Stack.Screen name="Tweet Screen" component={TweetScreen}></Stack.Screen>
            <Stack.Screen name="Profile Screen" component={ProfileScreen}></Stack.Screen>
        </Stack.Navigator>
 )
}

const TabNavgator= () =>{
 return(
       <Tab.Navigator>
            <Tab.Screen name="Home1" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} />
        </Tab.Navigator>
 )
}


export default function App() {
 return (
    <NavigationContainer>
     <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
   </NavigationContainer>
 );
 } 
 const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
