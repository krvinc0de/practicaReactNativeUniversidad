//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,  } from 'react-native';

// create a component
const Home = () => {

    const [entry, setEntry] = useState(null);
    const [final, setFinal] = useState(null);

    const convert = (num) => {

        return num * 3.2808;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Metros a pies</Text>
            <Text style={styles.subtitulo}>Ingrese los metros a convertir</Text>
            <TextInput
            keyboardType='numeric'
                style={styles.inputEntry}
                placeholder='ingrese a metros'
            />
            <TouchableOpacity style={styles.boton}>
                <Text>Convertir</Text>
            </TouchableOpacity>
            <Text style={styles.subtitulo}>Resultado de metros a pies</Text>
            <TextInput 
                style={styles.inputEntry}
                placeholder='Conversion'
            />
            
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
        color: "#000",
        fontSize: 20
    },
    subtitulo: {
        color: "#000",
        fontSize: 15
    },
    inputEntry: {
        borderColor: '#000',
        borderWidth: 1
    },
    boton: {
        backgroundColor: 'grey'
    }

});

//make this component available to the app
export default Home;
