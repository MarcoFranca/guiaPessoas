import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const PeopleListItem = props =>{
    const {people, navigateToUserDetail} = props;
    const {title, first, last} = people.name;

    return(
        <TouchableOpacity onPress={()=> {
            navigateToUserDetail({people})
            console.log('clicou em mim!!!' + first)
        }}>
            <View Key={ people.login.uuid } style={styles.line}>
                <Image style={styles.avatar} source={{uri: people.picture.thumbnail}} />
                <Text style={ styles.lineText}>{`${title}. ${first} ${last}`}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default PeopleListItem;

const styles = StyleSheet.create({
    line:{
        flexDirection: "row",
        height:60,
        elevation:4,
        backgroundColor: '#e2f9ff',
        alignItems: 'center',
        // marginTop:15,
        marginBottom:10,
    },
    lineText:{
        flex: 7,
        fontSize:20,
        paddingLeft:15,
    },
    avatar:{
        flex:1,
        borderRadius:50,
        aspectRatio:1,
        marginLeft:15,
    }
})
