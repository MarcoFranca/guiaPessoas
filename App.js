import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UsersPage from "./src/pages/UsersPage";


const AppNavigator = createStackNavigator({
    Main: {
        screen: UsersPage
    }
},{
    defaultNavigationOptions:{
        title: 'Pessoas!',
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



