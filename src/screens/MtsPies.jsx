//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
const MtsPies = () => {

    const [entry, setEntry] = useState();
    const [final, setFinal] = useState();

    const convert = () => {
        let res= parseFloat(entry) * 3.281;
        setFinal(res)
        console.log(final);
        return final
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Metros a pies</Text>
            <Text style={styles.subtitulo}>Ingrese los metros a convertir</Text>
            <TextInput
                keyboardType='numeric'
                inputMode='decimal'
                style={styles.inputEntry}
                placeholder='ingrese a metros'
                onChangeText={(value)=>{
                    setEntry(value)
                }}  
            />
            <TouchableOpacity 
            onPress={convert}
            style={styles.boton}>
                <Text>Convertir</Text>
            </TouchableOpacity>
            <Text style={styles.subtitulo}>Resultado de metros a pies</Text>   
            {
                final === undefined || isNaN(final) ? <View/> : (
                    <TextInput 
                    style={styles.inputEntry}
                    value={final.toString()}
                />
                )
            }
            
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
export default MtsPies;
