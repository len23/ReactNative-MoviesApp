import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default TopMenu = () => {
    return(
        <View style={styles.container}>
            <View style={styles.headerTitleContainer} >
                <Image style={styles.imdbLogo} source={require('../../assets/imdb_image_full.png')}/>
                <Text style={styles.title}>Best Movies</Text>
            </View>
            <Image style={styles.searchLogo} source={require('../../assets/search-icon-white.png')}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 28,
        paddingVertical: 20,
        marginBottom: 30,
        backgroundColor: '#121212',

    },
    headerTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: "#FFF",
        marginLeft: 10
    },
    searchLogo: {
        width: 35,
        height: 35
    },
    imdbLogo: {
        width: 55,
        height: 55
    }
})