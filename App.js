import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './Componentes/Header';
import Category from './Componentes/Category';
import Popular from './Componentes/Popular';
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  },
  firstContainer: {
    flex: 1,
  },
  secondContainer: {
    flex: 1,
  },
  thirdContainer: {
    flex: 4 ,
  },
  fourdContainer: {
    flex: 1,
  }
});
