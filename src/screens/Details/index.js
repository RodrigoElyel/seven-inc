import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, Keyboard } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// COMPONENTS
import ContainerInfo from '../../components/ContainerInfo'

// CONFIG
import colors from '../../config/colors'

// ICONS
import { MaterialIcons } from '@expo/vector-icons';

const index = ({ route }) => {

    const { item } = route.params
    const [editar, setEditar] = React.useState(false)
    const [funcionario, setFuncionario] = React.useState({
        id: null,
        name: '',
        bornDate: '',
        salary: '',
        position: ''
    })
    const [name, setName] = React.useState('')
    const [bornDate, setBornDate] = React.useState('')
    const [salary, setSalary] = React.useState('')
    const [position, setPosition] = React.useState('')


    const salvar = () => {
        
        var valor = salary.replace(",", ".")

        setFuncionario({
            id: item.id,
            name: name,
            bornDate: bornDate,
            salary: salary,
            position: position
        })
    }


    return (
        <Pressable style={{ height: "100%" }} onPress={Keyboard.dismiss}>

            <View style={styles.container}>

                <Image
                    resizeMode="contain"
                    style={{ height: 250, width: 250, marginHorizontal: 20 }}
                    source={{
                        uri: item.image
                    }}
                />

                <View style={styles.containerInfo}>
                    <ContainerInfo
                        edit={editar}
                        title="Name"
                        value={item.name}
                        setValue={setName}

                    />

                    <ContainerInfo
                        edit={editar}
                        title="Data de Nascimento"
                        value={item.bornDate}
                        setValue={setBornDate}
                        keyboard="numbers-and-punctuation"
                    />
                    <ContainerInfo
                        edit={editar}
                        title="Salário"
                        value={item.salary.toString()}
                        setValue={setSalary}
                        keyboard="numeric"
                    />

                    <ContainerInfo
                        edit={editar}
                        title="Cargo"
                        value={item.position}
                        setValue={setPosition}
                    />


                    <TouchableOpacity onPress={() => {editar === true ? salvar() : ''}}>
                        <View style={{ alignSelf: 'center', marginTop: 40 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: colors.escuro }}>{editar === true ? "SALVAR" : "EXCLUIR FUNCIONÁRIO"}</Text>
                        </View>
                    </TouchableOpacity>


                </View>



                <View style={{ position: 'absolute', top: 20, right: 20 }}>
                    <TouchableOpacity onPress={() => setEditar(!editar)}>
                        <MaterialIcons name="edit" size={35} color="black" />
                    </TouchableOpacity>
                </View>

                {console.log("1 : " + funcionario.id)}
                {console.log("2 : " + funcionario.name)}
                {console.log("3 : " + funcionario.bornDate)}
                {console.log("4 : " + funcionario.salary)}
                {console.log("5 : " + funcionario.position)}


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
