import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

// CONFIG
import colors from '../config/colors'


const ContainerInfo = ({ title, value, setValue, edit, keyboard }) => {

    const inputRef = React.useRef(null)

    const colocarFoco = () => {
        inputRef.current.focus()
    }

    return (


        <View style={styles.info}>

            {edit === true
                ?
                <>
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                    <TextInput

                        style={styles.inputText}
                        placeholder="Digite a nova informação"
                        placeholderTextColor={colors.escuro}
                        onChangeText={valor => setValue(valor)}
                        keyboardType={keyboard}
                    />
                </>
                :
                <>
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                    <Text>{value}</Text>
                </>
            }

        </View>


    )
}

export default ContainerInfo

const styles = StyleSheet.create({
    info: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        margin: 25,
        borderRadius: 25,
        backgroundColor: colors.branco
    },
    inputText: {
        height: "70%",
        fontSize: 15
    }
})
