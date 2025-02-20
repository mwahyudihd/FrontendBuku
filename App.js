import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import AddBookScreen from './screens/AddBookScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import EditBookScreen from './screens/EditBookScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false  }}
      />
      <HomeStack.Screen
        name="AddBookScreen"
        component={AddBookScreen}
        options={{ headerShown: false  }}
      />
      <HomeStack.Screen
        name="BookDetailsScreen"
        component={BookDetailsScreen}
        options={{ headerShown: false  }}
      />
      <HomeStack.Screen
        name="EditBookScreen"
        component={EditBookScreen}
        options={{ headerShown: false  }}
      />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Add Book') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200ea',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#f5f5f5', paddingBottom: 5, height: 60 },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Add Book" component={AddBookScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
