import React from "react";
import {Image, StyleSheet, View} from "react-native";
import LineCell from "../components/LineCell";

export default class UserDetails extends React.Component {
    render() {
        const {people} = this.props.navigation.state.params
        return(
            <View style={styles.container}>
                <Image source={{uri: people.picture.large}}
                       style={styles.avatar}/>
                <View style={styles.detailContainer}>
                    <LineCell label='Email:' content={people.email}/>
                    <LineCell label='Cidade:' content={people.location.city}/>
                    <LineCell label='Estado:' content={people.location.state}/>
                    <LineCell label='Tel:' content={people.phone}/>
                    <LineCell label='Cel:' content={people.cell}/>
                    <LineCell label='Nacionalidade:' content={people.nat}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding:15,
    },
    avatar:{
        aspectRatio:1,
        borderRadius:200,
    },
    detailContainer:{
        backgroundColor:'#e2f9ff',
        marginTop:20,
        elevation:2,
    },

})
