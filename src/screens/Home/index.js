import { NavigationRouteContext } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


// COMPONENTS
import Screen from '../../components/Screen'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'

// IMPORT ASSETS
import { Asset } from 'expo-asset';
import colors from '../../config/colors'

// ICONS
import { FAB } from 'react-native-paper';


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
        },
        {
            id: 5,
            name: 'Ana Paula',
            bornDate: '03/03/3333',
            salary: 5000.20,
            position: 'RH',
            image: Asset.fromModule(require('../../../assets/ana.png')).uri
        },
        {
            id: 6,
            name: 'Ana Paula',
            bornDate: '03/03/3333',
            salary: 5000.20,
            position: 'RH',
            image: Asset.fromModule(require('../../../assets/ana.png')).uri
        },
        {
            id: 7,
            name: 'Ana Paula',
            bornDate: '03/03/3333',
            salary: 5000.20,
            position: 'RH',
            image: Asset.fromModule(require('../../../assets/ana.png')).uri
        },
        {
            id: 8,
            name: 'Ana Paula',
            bornDate: '03/03/3333',
            salary: 5000.20,
            position: 'RH',
            image: Asset.fromModule(require('../../../assets/ana.png')).uri
        },
        {
            id: 9,
            name: 'Ana Paula',
            bornDate: '03/03/3333',
            salary: 5000.20,
            position: 'RH',
            image: Asset.fromModule(require('../../../assets/ana.png')).uri
        }, {
            id: 10,
            name: 'Ana Paula',
            bornDate: '03/03/3333',
            salary: 5000.20,
            position: 'RH',
            image: Asset.fromModule(require('../../../assets/ana.png')).uri
        }, {
            id: 11,
            name: 'Ana Paula',
            bornDate: '03/03/3333',
            salary: 5000.20,
            position: 'RH',
            image: Asset.fromModule(require('../../../assets/ana.png')).uri
        }, {
            id: 12,
            name: 'Ana Paula',
            bornDate: '03/03/3333',
            salary: 5000.20,
            position: 'RH',
            image: Asset.fromModule(require('../../../assets/ana.png')).uri
        }, {
            id: 13,
            name: 'Ana Paula',
            bornDate: '03/03/3333',
            salary: 5000.20,
            position: 'RH',
            image: Asset.fromModule(require('../../../assets/ana.png')).uri
        }, {
            id: 14,
            name: 'Ana Paula',
            bornDate: '03/03/3333',
            salary: 5000.20,
            position: 'RH',
            image: Asset.fromModule(require('../../../assets/ana.png')).uri
        },
    ]


    const [objeto, setObjeto] = React.useState(list)
    const [busca, setBusca] = React.useState('')



    return (
        <Screen >
            <View style={styles.container}>
                {/* <Pressable style={{height: "100%"}} onPress={Keyboard.dismiss}> */}
                <SearchBar
                    title="Buscar funcionário por ID ou NOME"
                    value={busca}
                    setValue={setBusca}

                />


                <ScrollView >
                    {objeto.map((item) =>
                        <View key={item.id} style={styles.containerCard}>
                            <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
                                <Card objeto={item} />
                            </TouchableOpacity>
                        </View>

                    )}
                </ScrollView>



            </View>
            <FAB
                style={styles.fab}
                // label="Employee"
                icon="plus"
                color="white"
                onPress={() => console.log("novo usuário")}
            />
        </Screen>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cinza,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    containerCard: {
        justifyContent: 'center',
        height: 110,
        backgroundColor: colors.cinza
    },
    cadastrar: {
        margin: 10,
        height: 40,
        width: "100%",
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.azulClarinho,
        borderRadius: 7
    },
    fab: {
        position: 'absolute',
        right: 10,
        bottom: 20,
        backgroundColor: colors.azulClarinho
    },
})
