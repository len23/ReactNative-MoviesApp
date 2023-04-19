import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { deleteMovie } from "../../services/moviesService";

export default  MovieRow = ({ item, onPressBookmarkIcon }) => {

    const Stars = ({rating}) => {     
        const numStars = Math.round((5/10) * rating);
        const stars = [];
        for (let i = 0, j=0; i < 5; i++) {
            if(j < numStars) {
                stars.push(<Ionicons key={i} name="star" size={20} color='#f5c518' />);
                j++;
            } else {
                stars.push(<Ionicons key={i} name="star-outline" size={20} color='#FFF' />)
            }
        }
        return <View style={styles.starsContainer}>{stars}</View>
    }


    return (
    <View style={styles.contaierItem}>
        <View style={styles.detalisContainer}>
            <Image style={styles.thumbnail} source={{uri:item.thumbnail}}/>
            <View>
                <Text style={styles.title} >{item.title.length > 15 ? `${item.title.slice(0,15)}...` : item.title}</Text>
                <Text style={styles.director}>{item.director[0]}</Text>
                <Text style={styles.rating}>{item.rating}</Text>
                <Stars rating={item.rating}/>
            </View>
        </View>
        <View style={styles.containerIcons}>
            <Ionicons name="play-sharp" size={30} color='#f5c518' />
            <Ionicons style={styles.bookmarkIcon} name='bookmark' size={30} color='#FFF' onPress={() => {onPressBookmarkIcon(item)}}/>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    contaierItem: {
        flexDirection: 'row',
        marginBottom: 50,
        justifyContent: 'space-around',
        borderBottomColor:'#FFF',
        borderBottomWidth: 1,
        paddingBottom: 35,
        flex: 10,
        marginLeft: 20,
        marginRight: 20
    },
    detalisContainer:{
        flexDirection: 'row',
        flex: 8
    },
    thumbnail: {
        width: 100,
        height: 100,
        marginRight: 20
    },
    starsContainer: {
        flexDirection: 'row',
        marginTop: 15
    },
    title: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: '500'
    },
    rating: {
        color: '#a3a1a1',
        fontSize: 15
    },
    director: {
        color: '#a3a1a1',
        fontSize: 15
    },
    bookmarkIcon: {
        marginTop: 10
    },
    containerIcons: {
        alignItems: 'flex-end',
        flex: 2,
    }
})
