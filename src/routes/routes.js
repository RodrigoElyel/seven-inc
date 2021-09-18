import React from 'react';

// NAVIGATIONS
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import Home from '../screens/Home'
import Details from '../screens/Details'
import NewEmployee from '../screens/NewEmployee'

// CONFIG
import colors from '../config/colors';


const Stack = createStackNavigator();



const MainScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerTintColor: colors.branco,
                headerStyle: {backgroundColor: colors.azulEscuro}
                
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="NewEmployee" component={NewEmployee} />
            
        </Stack.Navigator>
    )
}


export default MainScreen