import React from "react";
import {FlatList, StyleSheet} from "react-native";
import PeopleListItem from "./PeopleListItem";

const PeopleList = (props) =>{
    return(
        <FlatList
            style={styles.container}
            data={props.peoples}
            renderItem={({item})=>(
                <PeopleListItem
                    navigateToUserDetail={props.onPressItem}
                    people={item} />
            )} keyExtractor={item => item.login.uuid}/>
    );
};

export default PeopleList;


const styles = StyleSheet.create({
        container:{
            // backgroundColor: '#e2f9ff',
        }
    }
)
