import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../pages/Feed';
import MyPosts from '../pages/MyPosts';
import Post from '../pages/Post';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      // headerShown: false,
      cardStyle: { backgroundColor: '#F9F9F9' },
    }}
  >
    <App.Screen name="Feed" component={Feed} />
    <App.Screen name="MyPosts" component={MyPosts} />
    <App.Screen name="Post" component={Post} />
  </App.Navigator>
);

export default AppRoutes;
