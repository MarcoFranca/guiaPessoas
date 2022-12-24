import React from "react";
import {View} from 'react-native';
import Header from '../components/header/Header'
import PeopleList from "../components/peopleList/PeopleList";
import axios from "axios";

export default class UserPage extends React.Component {
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
                <Header title={'Pessoas!'} />
                <PeopleList peoples={this.state.peoples} />
            </View>
        );
    }
}

