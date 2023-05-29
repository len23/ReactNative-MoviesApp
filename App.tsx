import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HomeStackParamList,
  FavoritesStackParamList,
  SignUpStackParamsList,
  UserProfileParamList,
  MapsParamsList,
} from './src/types/Stacks';
import BookMarkList from './src/views/Favs/BookMarkList.view';
import DetailScreen from './src/views/MovieDetails/DetailScreen.view';
import Home from './src/views/Home/Index';
import Login from './src/views/Login/Login';
import SignUp from './src/views/SignUp/SignUp';
import useAuthStore from './src/store/authStore';
import UserProfile from './src/views/UserProfile/UserProfile';
import Maps from './src/views/Maps/Maps';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const FavoritesStack = createNativeStackNavigator<FavoritesStackParamList>();
const SignUpSatck = createNativeStackNavigator<SignUpStackParamsList>();
const UserProfileStack = createNativeStackNavigator<UserProfileParamList>();
const MapsStack = createNativeStackNavigator<MapsParamsList>();

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

const SignUpSatckScreen = () => {
  return (
    <SignUpSatck.Navigator>
      <SignUpSatck.Screen name="LogIn" component={Login} options={{ headerShown: false }} />
      <SignUpSatck.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: '',
          headerTransparent: true,
        }}
      />
    </SignUpSatck.Navigator>
  );
};

const UserProfileStackScreen = () => {
  return (
    <UserProfileStack.Navigator>
      <UserProfileStack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
    </UserProfileStack.Navigator>
  );
};

const MapsStackScreen = () => {
  return (
    <MapsStack.Navigator>
      <MapsStack.Screen name="Maps" component={Maps} options={{ headerShown: false }} />
    </MapsStack.Navigator>
  );
};

export default function App() {
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
}
