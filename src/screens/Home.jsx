//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

// create a component
const Home = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>Menu de funciones</Text>
                <View style={styles.contenedorBoton}>
                    <TouchableOpacity style={styles.boton}>
                        <Text>Metros a pies</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton}>
                        <Text>Factorial de un numero</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contenedorBoton}>
                    <TouchableOpacity style={styles.boton}>
                        <Text>Grados centigrados a celsius</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton}>
                        <Text>Numero N</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contenedorBoton}>
                    <TouchableOpacity style={styles.boton}>
                        <Text>Numero de la suerte</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton}>
                        <Text>dos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contenedorBoton}>
                    <TouchableOpacity style={styles.boton}>
                        <Text>Precio final de una venta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 40,
        color: '#000',
        fontWeight: '600'
    },
    contenedorBoton: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20
    },
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: 10,
        padding: 5,
        width: '45%',
        height: 100
    }
});

//make this component available to the app
export default Home;
