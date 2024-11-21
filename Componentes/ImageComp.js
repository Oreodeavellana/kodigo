import React from 'react';
import {SafeAreaView, View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function ImageComp(){
    return(
        <SafeAreaView>
            <Image style={styles.img} source={{uri:'https://th.bing.com/th/id/R.181beba80536f337b803fffeb40ae5d5?rik=nDPvH8d00p6uKg&riu=http%3a%2f%2fwww.ranklogos.com%2fwp-content%2fuploads%2f2015%2f12%2fSpiderman-Symbol-Vector-Logo.jpg&ehk=5U9jhge2seRzxLqWdSeNEzJLNUmhIK8GL1czi1WtmCA%3d&risl=&pid=ImgRaw&r=0'}}/>
            <TouchableOpacity  style={styles.button}>
                <Text>Hola mundo</Text>
            </TouchableOpacity>
           
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    img:{
        width: 415,
        height: 415,
    },
    button:{
       backgroundColor: "#5953e9",
       width: 300,
       height: 30,
       padding: 5,
       alignItems: 'center',
       justifyContent: 'center',
       marginLeft: 55,
    }
})
