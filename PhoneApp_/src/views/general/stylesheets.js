import {React} from 'react';
import { StyleSheet } from  'react-native';

const themes = StyleSheet.create({
    inputStyle:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    container: {
        marginTop: 25,
        padding: 10
    },
    header: {
        fontSize: 20
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    subNavItem: {
        padding: 5
    },
    topic: {
        textAlign: "center",
        fontSize: 15
    }
})

export default themes;