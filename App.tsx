import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStackParamList, FavoritesStackParamList } from './src/types/Stacks';
import BookMarkList from './src/views/Favs/BookMarkList.view';
import DetailScreen from './src/views/MovieDetails/DetailScreen.view';
import Home from './src/views/Home/Index';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const FavoritesStack = createNativeStackNavigator<FavoritesStackParamList>();

const TabNavigator = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="MovieDetails" component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

const FavoritesStackScreen = () => {
  return (
    <FavoritesStack.Navigator screenOptions={{ headerShown: false }}>
      <FavoritesStack.Screen name="BookMarkList" component={BookMarkList} />
      <FavoritesStack.Screen name="MovieDetails" component={DetailScreen} />
    </FavoritesStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000', borderTopColor: '#000' },
          tabBarActiveTintColor: '#f5c518',
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
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}
