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

const EmployeesList = ({ objeto }) => {



    return (
        <View style={styles.container}>
            <ScrollView>
                {objeto.map((item) =>
                    <View key={item.id}style={styles.card}>

                        {/* parte da esquerda do card */}
                        <View style={{ flexDirection: "column", alignItems: 'center' }}>

                            <Image
                                resizeMode="contain"
                                style={{ height: 50, width: 50, marginHorizontal: 20 }}
                                source={{
                                    uri: item.image
                                }}
                            />
                            <Text>{'ID: ' + item.id}</Text>

                        </View>

                        {/* parte do meio do card */}
                        <View style={{ width: '60%', alignItems: 'center' }}>

                            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                            <Text style={{ alignSelf: 'center' }}>{item.position}</Text>

                        </View>

                        {/* parte da direita do card */}
                        <TouchableOpacity onPress={() => navigation.navigate('Details')} style={{ alignItems: 'center', width: 60 }}>
                            <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
                        </TouchableOpacity>

                    </View>
                )}
            </ScrollView>
        </View>

    )
}

export default EmployeesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.cinza

    },
    card: {
        height: '40%',
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.branco,
        borderColor: colors.azulEscuro
    }
})