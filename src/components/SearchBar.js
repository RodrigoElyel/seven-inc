import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

// CONFIG
import colors from '../config/colors'

// DADOS CONTEXT
import { DadosContext } from '../DadosContext'

// ICONS
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ title, value, setValue }) => {

    const { lista } = React.useContext(DadosContext)
    const [filtrados, setFiltrados] = React.useState(lista)


    const inputRef = React.useRef(null)


    const search = (value) => {

        if (value) {
            const filtrados = lista.filter(item => {
                const minusculo = item.id.toString().toLowerCase()

                const itemMinu = value.toLowerCase()

                return minusculo.indexOf(itemMinu) > -1
            })

            setFiltrados(filtrados)
            setValue(filtrados)


        } else {
            //seta com o vetor original
            setValue(objeto)
        }
    }


    return (


        <View style={styles.containerBusca}>

            <TextInput
                style={styles.inputText}
                placeholder={title}
                placeholderTextColor={colors.escuro}
                onChangeText={value => search(value)}
            />
            <TouchableOpacity onPress={() => console.log("Buscar")}>
                <FontAwesome name="search" size={25} color={colors.azulClarinho} />
            </TouchableOpacity>


        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
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
