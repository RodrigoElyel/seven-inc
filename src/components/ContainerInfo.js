import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


import { TextInputMask } from 'react-native-masked-text'

// CONFIG
import colors from '../config/colors'
import fonts from '../config/fonts'


const ContainerInfo = ({ title, value, setValue, edit, keyboard, mask }) => {

    const [data, setData] = React.useState('')
    const [valor, setValor] = React.useState('')

    return (


        <View style={styles.info}>

            {edit === true
                ?
                <>
                    <View >
                        <Text style={{ fontFamily: fonts.bold, fontSize: 12, width: 80 }}>{title}</Text>
                    </View>
                    {mask === null &&
                        <TextInput
                            style={styles.inputText}
                            placeholder="Digite a nova informação"
                            placeholderTextColor={colors.escuro}
                            onChangeText={valor => setValue(valor)}
                            keyboardType={keyboard}
                        />}
                    {mask === "data" &&
                        <TextInputMask
                            style={styles.inputText}
                            type="datetime"
                            options={{
                                format: "DD/MM/YYYY"
                            }}
                            value={data}
                            placeholder="Digite a nova informação"
                            placeholderTextColor={colors.escuro}
                            onChangeText={valor => { setData(valor); setValue(valor) }}
                            keyboardType={keyboard}
                        />
                    }

                    {mask === "dinheiro" &&
                        <TextInputMask
                            style={styles.inputText}
                            type="money"
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: 'R$',
                                suffixUnit: ''
                            }}
                            value={valor}
                            placeholder="Digite a nova informação"
                            placeholderTextColor={colors.escuro}
                            onChangeText={valor => { setValor(valor); setValue(valor) }}
                            keyboardType={keyboard}
                        />
                    }

                </>
                :
                <>
                    <View >
                        <Text style={{width: 80, fontFamily: fonts.bold, fontSize: 12 }}>{title}</Text>
                    </View>
                    <View style={styles.inputText}>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: fonts.Montserrat_500Medium
                        }}>{value}</Text>
                    </View>
                </>
            }

        </View>


    )
}

export default ContainerInfo

const styles = StyleSheet.create({
    info: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        margin: 25,
        borderRadius: 25,
        backgroundColor: colors.branco
    },
    inputText: {
        justifyContent: 'center',
        height: "70%",
        width: "50%",
        fontSize: 12,
        fontFamily: fonts.Montserrat_500Medium
    }
})
