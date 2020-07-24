import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// import SplashScreen from '../pages/SplashScreen';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Feed from '../pages/Feed';
import MyPosts from '../pages/MyPosts';
import Post from '../pages/Post';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    {/* <Auth.Screen name="SplashScreen" component={SplashScreen} /> */}
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="Feed" component={Feed} />
    <Auth.Screen name="MyPosts" component={MyPosts} />
    <Auth.Screen name="Post" component={Post} />
  </Auth.Navigator>
);

export default AuthRoutes;
