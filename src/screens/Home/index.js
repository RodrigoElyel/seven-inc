import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Constants from 'expo-constants'


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

    const atualizar = () => {
        setFiltrados(lista)
    }


    React.useEffect(() => {
       atualizar() 
    }, [lista])
 

    return (

        <View style={styles.screen}>
            <View style={styles.container}>
                
                {/* Camponente de busca */}
                <SearchBar
                    title="Buscar ID"
                    setValue={setFiltrados}

                />

                {/* Exibição da lista com um componente Card */}
                <ScrollView >
                    {filtrados.map((item) =>

                        <View key={item.id} style={styles.containerCard}>
                            <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
                                <Card objeto={item} />
                            </TouchableOpacity>
                        </View>

                    )}
                </ScrollView>

            </View>

            {/* Botão de adição de funcionários */}
            <FAB
                style={styles.fab}
                icon="plus"
                color="white"
                onPress={() => navigation.navigate('NewEmployee')}
            />
        </View>
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
    },
    screen: {
        //  paddingLeft: 50,
        flex: 1,
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.white
    },
    view: {
        flex: 1
    }
})
