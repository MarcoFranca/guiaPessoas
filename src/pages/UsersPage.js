import * as React from "react";
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import PeopleList from "../components/peopleList/PeopleList";
import axios from "axios";

export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            peoples:[],
            loading:false,
            error:false,
        };
    }
    componentDidMount() {
        this.setState({loading: true});
        axios.get('https://randomuser.me/api/?nat=br&results=150')
            .then(res =>{
                const {results} = res.data;
                this.setState({
                    peoples:results,
                    loading:false,
                });
            }).catch(err => {
                console.log(err)
                this.setState({
                    loading:false,
                    error: true
                })
            }

        )
    }

    renderLoading (){
        if (this.state.loading){
    return <ActivityIndicator size={"large"} color='#6ca2f7'/>
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.loading ?  <ActivityIndicator  size={"large"} color='#6ca2f7'/>:
                    this.state.error
                        ?<Text style={styles.error}>Ops... Algo deu errado!!! :(</Text>
                        : <PeopleList
                    peoples={this.state.peoples}
                    onPressItem={(pageParams)=> {
                    this.props.navigation.navigate('UserDetail', pageParams);
                }} />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    },
    error:{
        color: 'red',
        fontSize:18,
        alignSelf: 'center'
    }
})
