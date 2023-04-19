import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './Screens/Detail/DetailScreen';
import Root from './Screens/Root';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen 
            name="Root"
            component={Root}
          />
           <Stack.Screen 
            name="DetailScreen"
            component={DetailScreen}
          />
       </Stack.Navigator>
    </NavigationContainer>
  );
}
