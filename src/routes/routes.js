import React from 'react';

// NAVIGATIONS
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import Home from '../screens/Home'
import Details from '../screens/Details'

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
        </Stack.Navigator>
    )
}


export default MainScreen