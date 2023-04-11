import MoviesList from "./MoviesList";
import TopMenu from "../common/TopMenu";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default Home = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <TopMenu/>
            <MoviesList navigation={navigation}/>  
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#000',
      height:'100%' //Temporary
    }
  });