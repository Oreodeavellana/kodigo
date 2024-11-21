import Header from "../Componentes/Header";
import Category from "../Componentes/Category";
import Popular from "../Componentes/Popular";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Home(){
    return(
    <View style = {styles.container}>
      <View style = {styles.firstContainer}>
        <Header/>
      </View>

      <View style = {styles.secondContainer}>
        <Category/>
      </View>

      <View style = {styles.thirdContainer}>
        <Popular/>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: 'white'
    },
    firstContainer: {
      flex: 1,
    },
    secondContainer: {
      flex: 1,
    },
    thirdContainer: {
      flex: 4 ,
    }
  });