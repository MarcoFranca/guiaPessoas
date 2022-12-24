import * as React from "react";
import {Text, View, StyleSheet} from "react-native";
const Header = (props)=>(
    <View style={style.containerStyle}>
        <Text style={style.titleStyle}>{props.title}</Text>
    </View>
);

export default Header

const style = StyleSheet.create({
    containerStyle :{
        marginTop: 25,
        backgroundColor: '#6ca2f7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle : {
        fontSize: 50,
        color: '#FFFFFF',
    }
})
