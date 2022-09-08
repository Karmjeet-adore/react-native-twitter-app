import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import 'react-native-gesture-handler';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
        })
        }
      />
    </View>
  );
}

function DetailsScreen({ route, navigation}) {
    useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log("screen Focused")

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log("screen unfocused")
      };
    }, [])
  );

//const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      {/* <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

export default function App() {
    // return(
     
    //     <NavigationContainer>
    //      <Stack.Navigator>
    //      <Stack.Screen 
    //        name="Home" 
    //        component={HomeScreen}
    //        options={{ title: 'My home' }}
    //      />
    //      <Stack.Screen name="Details" component={DetailsScreen} />
    //     </Stack.Navigator>
    //    </NavigationContainer>
    
    // );
    return(
     
        <NavigationContainer>
         <Tab.Navigator>
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarLabel:'My Home',
                tabBarIcon:({color,size})=>(
                    <FontAwesome name="home" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen 
          name="Details" 
          component={DetailsScreen}
          options={{
                tabBarLabel:'My Details',
                tabBarIcon:({color,size})=>(
                    <Ionicons name="settings" size={size} color={color} />
                )
            }}
           />
      </Tab.Navigator>
       </NavigationContainer>
    
    );
    // return(
     
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Details" component={DetailsScreen} />
//       </Drawer.Navigator>
//    </NavigationContainer>
    
//     );
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop:60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  });

