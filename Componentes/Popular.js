import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import React from "react";

export default function Popular() {
    return (
        <View>
            <Text style={styles.styleText}>
                Popular
            </Text>

            <View style={styles.listView}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} img={item.img} />}
                    keyExtractor={item => item.id.toString()} // Asegúrate de que el keyExtractor esté devolviendo una cadena.
                />
            </View>
        </View>
    );
}

const DATA = [
    {
        id: 1,
        img: require('C:\Users\Estudiantes\Desktop\ProyectoReactNative\kodigo\assets\Imagen1.png'), // Usar require para cargar la imagen localmente
        title: 'Monument of Salavat Youlaev',
    },
    {
        id: 2,
        img: require('C:\Users\Estudiantes\Desktop\ProyectoReactNative\kodigo\assets\Imagen2.png'), // Usar require para cargar la imagen localmente
        title: 'Krasnyy Klyuch spring',
    }
];

const Item = ({ title, img }) => (
    <View style={styles.item}>
        <Image source={img} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    styleText: {
        fontSize: 20,
        marginLeft: 15,
        marginTop: 45,
        fontWeight: "700",
        bottom: 10
    },
    item: {
        marginRight: 10,
        alignItems: 'center',
    },
    title: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    listView: {
        marginTop: 10
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    }
});
