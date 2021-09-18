import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


// COMPONENTS
import Screen from '../../components/Screen'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'

// COLORS
import colors from '../../config/colors'

// ICONS
import { FAB } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

// DADOS CONTEXT
import { DadosContext } from '../../DadosContext'


const index = ({ navigation }) => {

    const { lista, setLista } = React.useContext(DadosContext)
    const [filtrados, setFiltrados] = React.useState(lista)


    React.useEffect(() => {
        
    }, [lista])
 

    return (

        <Screen >
            <View style={styles.container}>
                {/* <Pressable style={{height: "100%"}} onPress={Keyboard.dismiss}> */}
                <SearchBar
                    title="Buscar ..."
                    setValue={setFiltrados}

                />

                <ScrollView >
                    {lista.map((item) =>

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
                icon="plus"
                color="white"
                onPress={() => navigation.navigate('NewEmployee')}
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
    containerBusca: {
        height: "5%",
        width: "90%",
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: colors.azulEscuro
    },
    inputText: {
        height: "80%",
        width: "80%",
        marginLeft: 20,
        fontSize: 18
    }
})
