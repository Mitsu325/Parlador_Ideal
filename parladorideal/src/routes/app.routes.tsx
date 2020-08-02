import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../pages/Feed';
import Post from '../pages/Post';
import MyPosts from '../pages/MyPosts';
import DeletePost from '../pages/DeletePost';
import EditPost from '../pages/EditPost';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#F9F9F9' },
    }}
  >
    <App.Screen name="Feed" component={Feed} />
    <App.Screen name="Post" component={Post} />
    <App.Screen name="MyPosts" component={MyPosts} />
    <App.Screen name="DeletePost" component={DeletePost} />
    <App.Screen name="EditPost" component={EditPost} />
  </App.Navigator>
);

export default AppRoutes;
