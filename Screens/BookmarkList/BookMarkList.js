import { SafeAreaView, StyleSheet } from "react-native"
import TopMenu from "../common/TopMenu"
import SavedMovies from "./SavedMovies";

export default BookMarkList = ({route, navigation}) => {
    return (<SafeAreaView style={styles.container}>
                <TopMenu/>
                <SavedMovies navigation={navigation}/>
            </SafeAreaView>    )
}


const styles = StyleSheet.create({
    container:{
      backgroundColor: '#000',
      height:'100%' //Temporary
    }
  });
