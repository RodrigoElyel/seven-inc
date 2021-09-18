import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// NAVIGATIONS
import { NavigationContainer } from '@react-navigation/native'
import MainScreen from './src/routes/routes';

// SCREENS
import Home from './src/screens/Home'
import Details from './src/screens/Details'

// IMPORT ASSETS
import { Asset } from 'expo-asset';

// DADOS CONTEXT
import { DadosContext } from './src/DadosContext';




export default function App() {

  const list = [
    {
      id: 1,
      name: 'Rodrigo Elyel Costa Batista',
      bornDate: '01/01/1111',
      salary: 2500.00,
      position: 'developer junior',
      image: Asset.fromModule(require('./assets/rodrigo.png')).uri

    },
    {
      id: 2,
      name: 'Junior Sousa',
      bornDate: '02/02/2222',
      salary: 3000.75,
      position: 'design',
      image: Asset.fromModule(require('./assets/junior.png')).uri
    },
    {
      id: 3,
      name: 'Ana Paula',
      bornDate: '03/03/3333',
      salary: 5000.20,
      position: 'RH',
      image: Asset.fromModule(require('./assets/ana.png')).uri
    },
    {
      id: 4,
      name: 'Michael Lesly',
      bornDate: '04/04/4444',
      salary: 7250.00,
      position: 'developer senior',
      image: Asset.fromModule(require('./assets/michael.png')).uri
    }, {
      id: 5,
      name: 'Rodrigo Elyel Costa Batista',
      bornDate: '01/01/1111',
      salary: 2500.00,
      position: 'developer junior',
      image: Asset.fromModule(require('./assets/rodrigo.png')).uri

    },
    {
      id: 6,
      name: 'Junior Sousa',
      bornDate: '02/02/2222',
      salary: 3000.75,
      position: 'design',
      image: Asset.fromModule(require('./assets/junior.png')).uri
    },
    {
      id: 7,
      name: 'Ana Paula',
      bornDate: '03/03/3333',
      salary: 5000.20,
      position: 'RH',
      image: Asset.fromModule(require('./assets/ana.png')).uri
    },
    {
      id: 8,
      name: 'Michael Lesly',
      bornDate: '04/04/4444',
      salary: 7250.00,
      position: 'developer senior',
      image: Asset.fromModule(require('./assets/michael.png')).uri
    }
  ]


  const [lista, setLista] = React.useState(list)

  return (
    <DadosContext.Provider value={{ lista, setLista }}>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </DadosContext.Provider>

  );
}

const styles = StyleSheet.create({

});
