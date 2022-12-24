import React from "react";
import {StyleSheet, View} from "react-native";
import PeopleListItem from "./PeopleListItem";

const PeopleList = (props) =>{
    const textElements = props.peoples.map(people =>
            <PeopleListItem Key={people.login.uuid} people={people} />
    );

    return(
  <View style={styles.container}>
      {textElements}
  </View>
)

}

export default PeopleList;


const styles = StyleSheet.create({
        container:{
            // backgroundColor: '#e2f9ff',
        }
    }
)
