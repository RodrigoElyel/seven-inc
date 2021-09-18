import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, Keyboard, KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// COMPONENTS
import ContainerInfo from '../../components/ContainerInfo'

// CONFIG
import colors from '../../config/colors'

// ICONS
import { MaterialIcons } from '@expo/vector-icons';

// DADOS CONTEXT
import { DadosContext } from '../../DadosContext'

// IMPORT ASSETS
import { Asset } from 'expo-asset';


const index = ({ navigation }) => {

    const { lista, setLista } = React.useContext(DadosContext)

    const [name, setName] = React.useState('')
    const [bornDate, setBornDate] = React.useState('')
    const [salary, setSalary] = React.useState('')
    const [position, setPosition] = React.useState('')
    const imageUri = Asset.fromModule(require('../../../assets/batman.png')).uri


    const salvar = () => {


        min = Math.ceil(20);
        max = Math.floor(1000);
        id = Math.floor(Math.random() * (max - min)) + min;


        var valor = salary.replace(",", ".")

        setLista([...lista, {
            id: id,
            name: name,
            bornDate: bornDate,
            salary: salary,
            position: position,
            image: imageUri
        }])


        alert("Cadastro Realizado!")
        navigation.goBack()


    }



    return (
        <Pressable style={{ height: "100%" }} onPress={Keyboard.dismiss}>

            <View style={styles.container}>

                <KeyboardAvoidingView style={styles.containerInfo} behavior="position" enabled>

                    <Image
                        resizeMode="contain"
                        style={{ height: 250, width: 250, marginHorizontal: 20, alignSelf: 'center' }}
                        source={{
                            uri: imageUri
                        }}
                    />

                    <ContainerInfo
                        edit={true}
                        title="Name"
                        value={name}
                        setValue={setName}

                    />

                    <ContainerInfo
                        edit={true}
                        title="Data de Nascimento"
                        value={bornDate}
                        setValue={setBornDate}
                        keyboard="numbers-and-punctuation"
                    />
                    <ContainerInfo
                        edit={true}
                        title="Salário"
                        value={salary.toString()}
                        setValue={setSalary}
                        keyboard="numeric"
                    />

                    <ContainerInfo
                        edit={true}
                        title="Cargo"
                        value={position}
                        setValue={setPosition}
                    />


                    <TouchableOpacity onPress={() => salvar()}>
                        <View style={{ alignSelf: 'center', marginTop: 40 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: colors.escuro }}>CADASTRAR FUNCIONÁRIO</Text>
                        </View>
                    </TouchableOpacity>


                </KeyboardAvoidingView>


                {/* {console.log("1 : " + funcionario.id)}
                {console.log("2 : " + funcionario.name)}
                {console.log("3 : " + funcionario.bornDate)}
                {console.log("4 : " + funcionario.salary)}
                {console.log("5 : " + funcionario.position)} */}


            </View>
        </Pressable>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cinza,
        alignItems: 'center',
    },
    containerInfo: {
        height: "100%",
        width: "100%",
        backgroundColor: colors.cinza
    },
    info: {
        height: 50,
        margin: 25,
        borderRadius: 25,
        backgroundColor: colors.branco
    },

})