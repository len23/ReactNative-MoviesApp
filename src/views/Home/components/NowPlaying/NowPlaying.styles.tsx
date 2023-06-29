import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";

const window = Dimensions.get('window');
const PAGE_WIDTH = window.width;



export const styles = StyleSheet.create({
    metricsContainer: { flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10 },
    metricsInfo: {color: '#FFF', fontSize: 20},
    title: {
         textAlign: 'center', fontSize: 35, color: '#FFF', fontWeight: '700' , marginTop: 20
    },
    moreInfoButton: {
        borderColor: '#FFF',
        borderWidth: 5,
        borderRadius: 50,
        paddingVertical: 10,
        width: PAGE_WIDTH * 0.65,
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 25
    }

});

