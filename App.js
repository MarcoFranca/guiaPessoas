import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UserPage from "./src/pages/UserPage";


const AppNavigator = createStackNavigator({
    Main: {
        screen: UserPage
    }
});


const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;



