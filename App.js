import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UsersPage from "./src/pages/UsersPage";
import UserDetailsPage from './src/pages/UserDetails'


const AppNavigator = createStackNavigator({
    Main: {
        screen: UsersPage
    },
    UserDetail:{
        screen: UserDetailsPage,
        navigationOptions: ({navigation})=>{
            const user = navigation.state.params.people.name.first;
            return({
                title: user,
                headerTitleStyle:{
                    color: 'white',
                    fontSize: 30,
                }
            });
        }
    }
},{
    defaultNavigationOptions:{
        title: 'Contatos!',
        headerTintColor: 'white',
        headerStyle:{
            backgroundColor:'#6ca2f7',
            borderBottomWidth: 2,
            borderBottomColor:'#C5C5C5'
        },
        headerTitleStyle:{
            color: 'white',
            fontSize: 30,
            textAlign: 'center',
        }
    }
});


const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;



