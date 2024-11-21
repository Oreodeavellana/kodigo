import { StyleSheet, View, Text } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { Searchbar } from 'react-native-paper';


export default function Header(){
    return(
        <View style = {styles.viewNexus}>
            <View style = {styles.viewRow}>
                <Text style = {styles.textDecoration}>Nexus</Text>
                <Entypo style = {styles.imgMap} name="map" size={24} color="red"  />
            </View>
            <Text style = {styles.subTextDescoration}>Choose another</Text>
            <Searchbar style = {styles.searchBar} placeholder="Enter name or category" placeholderTextColor={'#797979'} iconColor="#797979"/>  
        </View>
    );
}

const styles = StyleSheet.create({
    textDecoration: {
        fontSize: 30,
        marginLeft: 15,
        marginTop: 30,
        fontWeight: "700"
    },
    viewNexus:{
        flex: 1,
        flexDirection: 'colum',
    },
    viewRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgMap:{
        top: 40,
        right: 15
    },
    subTextDescoration:{
        color: "#797979",
        marginLeft: 15,
        fontSize: 10
    },
    searchBar:{
        top: 20,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 20,
    }
})