import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'

// ICONES
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// CONFIG
import colors from '../config/colors';


// IMPORT ASSETS
import { Asset } from 'expo-asset';
import { TouchableOpacity } from 'react-native-gesture-handler';
import fonts from '../config/fonts';

const Card = ({ objeto }) => {



    return (


        <View style={styles.card}>

            {/* parte da esquerda do card */}
            <View style={{ flexDirection: "column", alignItems: 'center' }}>

                <Image
                    resizeMode="contain"
                    style={{ height: 50, width: 50, marginHorizontal: 20 }}
                    source={{
                        uri: objeto.image
                    }}
                />
                <Text style={{fontFamily: fonts.texto}}>{'ID: ' + objeto.id}</Text>

            </View>

            {/* parte do meio do card */}
            <View style={{ width: '60%', alignItems: 'center' }}>

                <Text style={{ fontFamily: fonts.bold, fontSize: 12 }}>{objeto.name}</Text>
                <Text style={{ alignSelf: 'center', fontFamily: fonts.texto, fontSize: 12 }}>{objeto.position}</Text>

            </View>

            {/* parte da direita do card */}
            <View style={{ alignItems: 'center', width: 60 }}>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </View>

        </View>


    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        height: 100,
        marginHorizontal: 15,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.branco,
        borderColor: colors.azulEscuro
    }
})