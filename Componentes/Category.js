import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Category() {
    return (
        <View style = {styles.mainView}>
            <Text style={styles.styleText}>Category</Text>
            <View style={styles.listView}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} icon={item.icon} color={item.color} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

const DATA = [
    {
        title: 'Top 30 places',
        icon: 'star-box',
        color: 'orange'
    },
    {
        title: 'Nature',
        icon: 'leaf',
        color: 'green'
    },
    {
        title: 'Gastro',
        icon: 'food',
        color: 'red'
    },
];

const Item = ({ title, icon, color }) => (
    <View style={styles.item}>
        <MaterialCommunityIcons name={icon} size={45} color={color} />
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    styleText: {
        fontSize: 20,
        marginLeft: 15,
        marginTop: 40,
        fontWeight: "700",
        bottom: 15,
    },
    item: {
        backgroundColor: '#F1F1F1',
        paddingLeft: 5,
        paddingRight: 15,
        marginLeft:5,
        marginHorizontal: 10,
        height: 60,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        paddingLeft:5
    },
    mainView: {
      top:15
    },
    listView: {
        marginLeft: 10
    }
});
