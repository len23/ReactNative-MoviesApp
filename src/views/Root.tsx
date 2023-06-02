import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  FavoritesStackScreen,
  HomeStackScreen,
  MapsStackScreen,
  SignUpSatckScreen,
} from '../Routes/routes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useAuthStore from '../store/authStore';
import useThemeStore from '../store/themeStore';

const Root = () => {
  const TabNavigator = createBottomTabNavigator();
  const [themeStyles] = useThemeStore((state) => [state.themeStyles]);

  const [login, setLogin] = useAuthStore((state) => [state.login, state.setLogin]);

  if (!login) {
    return (
      <NavigationContainer>
        <SignUpSatckScreen />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: themeStyles.tabBackgroundColor,
            borderTopColor: '#000',
            paddingTop: 15,
          },
          tabBarActiveTintColor: themeStyles.tabIconColor,
          tabBarShowLabel: false,
        }}
      >
        <TabNavigator.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={30} />,
          }}
        />
        <TabNavigator.Screen
          name="BookMark"
          component={FavoritesStackScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="bookmark" color={color} size={30} />,
          }}
        />
        {/* <TabNavigator.Screen
      name="UserProfileTab"
      component={UserProfileStackScreen}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="person-circle" color={color} size={30} />,
      }}
    /> */}
        <TabNavigator.Screen
          name="MapsTab"
          component={MapsStackScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="map" color={color} size={30} />,
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Root;