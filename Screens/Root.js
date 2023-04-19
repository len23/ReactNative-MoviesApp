import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home/Home";
import BookMarkList from "./BookmarkList/BookMarkList";
import Profile from './Profile/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { optionsGetListMovies, optionsPostMovies, local, remote } from "../utils/options-headers";

const Tab = createBottomTabNavigator();

export default Root = () => {

     return (
          <Tab.Navigator 
               screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#000', borderTopColor: '#000' }, tabBarActiveTintColor: '#f5c518', tabBarShowLabel: false }} >
               <Tab.Screen name="Home" component={Home} options={
                    {
                         tabBarIcon: ({ color }) => (<Ionicons name="home" color={color} size={30} />),
                    }}
    
               />
               <Tab.Screen name="BookMarkList" component={BookMarkList} options={
                    {
                         tabBarIcon: ({ color }) => (
                              <Ionicons name="bookmark" color={color} size={30} />
                         )
                    }}
               />
               <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: ({ color }) => (
                         <Ionicons name="person-circle-outline" color={color} size={30} />
                    )
               }} />
          </Tab.Navigator>
     )
}