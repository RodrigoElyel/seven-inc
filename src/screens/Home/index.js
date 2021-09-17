import { NavigationRouteContext } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


// COMPONENTS
import Screen from '../../components/Screen'
import EmployeesList from '../../components/EmployeesList'
import SearchBar from '../../components/SearchBar'

// IMPORT ASSETS
import {Asset} from 'expo-asset';


const index = ({ navigation }) => {

    

    // lista de funcionários
    const list = [
        {
            id: 1,
            name: 'Rodrigo Elyel Costa Batista',
            bornDate: '01/01/1111',
            salary: 2500.00,
            position: 'developer junior',
            image: Asset.fromModule(require('../../../assets/rodrigo.png')).uri

        },
        {
            id: 2,
            name: 'Junior Sousa',
            bornDate: '02/02/2222',
            salary: 3000.75,
            position: 'design',
            image: Asset.fromModule(require('../../../assets/junior.png')).uri
        },
        {
            id: 3,
            name: 'Ana Paula',
            bornDate: '03/03/3333',
            salary: 5000.20,
            position: 'RH',
            image: Asset.fromModule(require('../../../assets/ana.png')).uri
        },
        {
            id: 4,
            name: 'Michael Lesly',
            bornDate: '04/04/4444',
            salary: 7250.00,
            position: 'developer senior',
            image: Asset.fromModule(require('../../../assets/michael.png')).uri
        }
    ]


    const [objeto, setObjeto] = React.useState(list)
    const [busca, setBusca] = React.useState('')



    return (
        <Screen >
            <View style={styles.container}>

                <SearchBar 
                    title="Buscar funcionário por ID ou NOME"
                    value={busca}
                    setValue={setBusca}
                    
                />

            
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <Text>Open up App.js to start working on your ssapp!</Text>
                </TouchableOpacity>

                <EmployeesList objeto={objeto} />
            </View>
        </Screen>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
