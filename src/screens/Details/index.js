import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// COMPONENTS
import ContainerInfo from '../../components/ContainerInfo'

// CONFIG
import colors from '../../config/colors'
import fonts from '../../config/fonts'

// ICONS
import { MaterialIcons } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';

// DADOS CONTEXT
import { DadosContext } from '../../DadosContext'


const index = ({ route, navigation }) => {

    const { lista, setLista } = React.useContext(DadosContext)

    const { item } = route.params
    const [editar, setEditar] = React.useState(false)
    const [name, setName] = React.useState('')
    const [bornDate, setBornDate] = React.useState('')
    const [salary, setSalary] = React.useState('')
    const [position, setPosition] = React.useState('')


    const salvar = () => {

        var valor = salary.replace(",", ".")

        setLista([...lista.filter(op => op.id !== item.id), {
            id: item.id,
            name: name,
            bornDate: bornDate,
            salary: salary,
            position: position,
            image: item.image
        }])


        alert("Alteração Realizada!")
        navigation.goBack()


    }

    const excluir = () => {

        var valor = salary.replace(",", ".")

        setLista([...lista.filter(op => op.id !== item.id)])


        alert("Exclusão Realizada!")
        navigation.goBack()

    }



    return (
        <ScrollView style={{backgroundColor: colors.cinza}}>

            <Pressable style={{ height: "100%" }} onPress={Keyboard.dismiss}>

                <View style={styles.container}>


                    <KeyboardAvoidingView style={styles.containerInfo} behavior="position" enabled>

                        {/* Campo da Imagem */}
                        <Image
                            resizeMode="contain"
                            style={{ height: 250, width: 250, marginHorizontal: 20, alignSelf: 'center' }}
                            source={{
                                uri: item.image
                            }}
                        />

                        {/* Componente que faz a exibições/edições das informações */}
                        <ContainerInfo
                            mask={null}
                            edit={editar}
                            title="Nome"
                            value={item.name}
                            setValue={setName}

                        />

                        <ContainerInfo
                            mask="data"
                            edit={editar}
                            title="Nascimento"
                            value={item.bornDate}
                            setValue={setBornDate}
                            keyboard="numeric"
                        />
                        <ContainerInfo
                            mask="dinheiro"
                            edit={editar}
                            title="Salário"
                            value={item.salary}
                            setValue={setSalary}
                            keyboard="numeric"
                        />

                        <ContainerInfo
                            mask={null}
                            edit={editar}
                            title="Cargo"
                            value={item.position}
                            setValue={setPosition}
                        />


                        {/* Botão de excluir funcionário */}
                        <TouchableOpacity onPress={() => { editar === true ? salvar() : excluir() }}>
                            <View style={{ alignSelf: 'center', marginTop: 10 }}>
                                <Text style={{fontSize: 16, color: colors.escuro, fontFamily: fonts.bold }}>{editar === true ? "SALVAR" : "EXCLUIR FUNCIONÁRIO"}</Text>
                            </View>
                        </TouchableOpacity>


                    </KeyboardAvoidingView>



                    {/* Botão de editar/desfazer */}
                    <View style={{ position: 'absolute', top: 20, right: 20 }}>
                        <TouchableOpacity onPress={() => setEditar(!editar)}>
                            {editar === true
                                ?
                                <Text style={{ fontFamily: fonts.bold, fontSize: 18 }}>Desfazer</Text>
                                :
                                <MaterialIcons name="edit" size={35} color="black" />
                            }
                        </TouchableOpacity>
                    </View>

                </View>
            </Pressable>
        </ScrollView>
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
