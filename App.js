// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
//import { Ionicons } from 'react-native-vector-icons/Ionicons';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ShowResultDetail from './src/screens/ShowDetailScreen';

//function SearchScreen() {
//  return (
//    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//      <Text>Search!</Text>
//    </View>
//  );
//}

//function SettingsScreen() {
// return (
//    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//      <Text>Settings!</Text>
//    </View>
//  );
//}

//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    screenOptions={{headerTintColor: '#6200ee'}}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{
        drawerActiveTintColor : "rgba(128, 0, 128,.3)",
        drawerInactiveTintColor : "#333333",
        drawerIcon : ({ focused }) => (<Ionicons color="#6200ee" size={16} name={focused ? 'ios-home' : 'ios-home'} />),
      }}
      />
      <Drawer.Screen name="Search" component={SearchScreen} options={{
        drawerActiveTintColor : "rgba(128, 0, 128,.3)",
        drawerInactiveTintColor : "#333333",
        drawerIcon : ({ focused }) => (<Ionicons color="#6200ee" size={16} name={focused ? 'ios-search' : 'ios-search'} />),
      }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{
        drawerActiveTintColor : "rgba(128, 0, 128,.3)",
        drawerInactiveTintColor : "#333333",
        drawerIcon : ({ focused }) => (<Ionicons color="#6200ee" size={16} name={focused ? 'ios-options' : 'ios-options'} />),
      }}
      />
      <Drawer.Screen name="Detail" component={ShowResultDetail} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null,
                drawerItemStyle: { height: 0 }
            }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

//export default function App() {
//  return (
//    <NavigationContainer>
//      <Tab.Navigator
//        screenOptions={({ route }) => ({
//          tabBarIcon: ({ focused, color, size }) => {
//            let iconName;
//
//            if (route.name === 'Search') {
//              iconName = focused
//                ? 'ios-search'
//                : 'ios-search';
//            } else if (route.name === 'Settings') {
//              iconName = focused ? 'ios-options' : 'ios-options';
//            }

            // You can return any component that you like here!
//            return <Ionicons name={iconName} size={size} color={color} />;
//          },
//          tabBarActiveTintColor: 'tomato',
//          tabBarInactiveTintColor: 'gray',
//        })}
//      >
//        <Tab.Screen name="Search" component={SearchScreen} />
//        <Tab.Screen name="Settings" component={SettingsScreen} />
//      </Tab.Navigator>
//    </NavigationContainer>
//  );
//}
