import React from "react";
import {View} from 'react-native';
import PeopleList from "../components/peopleList/PeopleList";
import axios from "axios";

export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            peoples:[]
        };
    }
    componentDidMount() {
        axios.get('https://randomuser.me/api/?nat=br&results=5')
            .then(res =>{
                const {results} = res.data;
                this.setState({
                    peoples:results
                })
            }).catch(err=> console.log(err))
    }

    render() {
        return (
            <View>
                <PeopleList peoples={this.state.peoples} />
            </View>
        );
    }
}

