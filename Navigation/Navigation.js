import { StyleSheet, View, Text, FlatList } from "react-native"; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screen/Home"; // Asegúrate de que esta ruta sea correcta

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarStyle: {
                            borderTopLeftRadius: 20,    
                            borderTopRightRadius: 20,   
                            elevation: 10,              
                            backgroundColor: '#fff',    
                            borderTopWidth: 0,          
                        },
                    }}
                />
                <Tab.Screen
                    name="Likes"
                    component={Home}
                    options={{
                        tabBarStyle: {
                            borderTopLeftRadius: 20,    
                            borderTopRightRadius: 20,   
                            elevation: 10,              
                            backgroundColor: '#fff',    
                            borderTopWidth: 0,          
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    // No es necesario aplicar estilos aquí si ya los defines en `tabBarStyle`
});
