import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const index = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('Funcionado')}>
                <Text>Detelhes vão ser aqui!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
