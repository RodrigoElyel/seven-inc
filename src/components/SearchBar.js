import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

// CONFIG
import colors from '../config/colors'

// ICONS
import { FontAwesome } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const SearchBar = ({ title, value, setValue, keyboard }) => {


    const inputRef = React.useRef(null)

    const colocarFoco = () => {
        inputRef.current.focus()
    }



    return (


        // COLOCAR O ->  <Pressable style={{ height: "100%" }} onPress={Keyboard.dismiss}> EM ALGUM LUGAR
        <View style={styles.container}>

            <TextInput
                style={styles.inputText}
                placeholder={title}
                placeholderTextColor={colors.escuro}
                value={value}
                onChangeText={value => setValue(value)}
            />
            <TouchableOpacity onPress={() => console.log("Buscar")}>
                <FontAwesome name="search" size={25} color={colors.azulClarinho} />
            </TouchableOpacity>


        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        height: "5%",
        width: "90%",
        marginTop: 15,
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
