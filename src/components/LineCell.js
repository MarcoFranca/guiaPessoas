import React from "react";
import {StyleSheet, Text, View} from "react-native";
const LineCell = ({label = "", content = "?"}) =>{
    return(
        <View style={styles.line}>
            <Text style={[styles.cell, label.length >8 ? styles.longlabel : styles.label ]}>{label}</Text>
            <Text style={[styles.cell, styles.content]}>{content}</Text>
        </View>
        )
}

const styles = StyleSheet.create({
    line:{
        flexDirection: "row",
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth:1,
        borderColor: '#C5C5C5'
    },
    cell:{

        fontSize:18,
        paddingLeft: 5,
        // borderWidth:1,
    },
    label:{
        flex:1,
        fontWeight:'bold',
    },
    content:{
        flex:3,
    },
    longlabel:{
        flex:1,
        fontSize:13,
        fontWeight:'bold',
        alignItems: "center",
        justifyContent: "center",
    }
})

export default LineCell;
