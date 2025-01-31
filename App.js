import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddBookScreen from './screens/AddBookScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';

// Buat Stack Navigator untuk HomeScreen dan BookDetailsScreen
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Sembunyikan header di HomeScreen
      />
      <HomeStack.Screen
        name="BookDetailsScreen"
        component={BookDetailsScreen}
        options={{ title: 'Book Details' }} // Atur judul header untuk BookDetailsScreen
      />
    </HomeStack.Navigator>
  );
};
// Buat Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Ganti HomeScreen dengan HomeStackScreen */}
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Add Book" component={AddBookScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}