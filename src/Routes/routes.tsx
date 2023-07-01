import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  FavoritesStackParamList,
  HomeStackParamList,
  MapsParamsList,
  SignUpStackParamsList,
  UserProfileParamList,
} from '../types/Stacks';
import Home from '../views/Home/Home.view';
import DetailScreen from '../views/MovieDetails/DetailScreen.view';
import MovieProviders from '../views/MovieProviders/MovieProviders';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookMarkList from '../views/Favs/BookMarkList.view';
import Login from '../views/Login/Login';
import SignUp from '../views/SignUp/SignUp';
import UserProfile from '../views/UserProfile/UserProfile';
import Maps from '../views/Maps/Maps';
import NowPlayingDetails from '../views/NowPlayingDetails/NowPlayingDetails';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const FavoritesStack = createNativeStackNavigator<FavoritesStackParamList>();
const SignUpSatck = createNativeStackNavigator<SignUpStackParamsList>();
const UserProfileStack = createNativeStackNavigator<UserProfileParamList>();
const MapsStack = createNativeStackNavigator<MapsParamsList>();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="MovieDetails" component={DetailScreen} />
      <HomeStack.Screen
        name="MovieProviders"
        component={MovieProviders}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <Ionicons
              name="arrow-back-outline"
              color="#FFF"
              size={40}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <HomeStack.Screen name="NowPlayingDetails" component={NowPlayingDetails} />
      <HomeStack.Screen
        name="Maps"
        component={Maps}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <Ionicons
              name="arrow-back-outline"
              color="#000"
              size={40}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </HomeStack.Navigator>
  );
};

export const FavoritesStackScreen = () => {
  return (
    <FavoritesStack.Navigator screenOptions={{ headerShown: false }}>
      <FavoritesStack.Screen name="BookMarkList" component={BookMarkList} />
      <FavoritesStack.Screen name="MovieDetails" component={DetailScreen} />
    </FavoritesStack.Navigator>
  );
};

export const SignUpSatckScreen = () => {
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

export const UserProfileStackScreen = () => {
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

export const MapsStackScreen = () => {
  return (
    <MapsStack.Navigator>
      <MapsStack.Screen name="Maps" component={Maps} options={{ headerShown: false }} />
    </MapsStack.Navigator>
  );
};
