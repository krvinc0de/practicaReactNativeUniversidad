//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
const Factorial = () => {

    const [num, setNum] = useState();
    const [factorial, setFactorial] = useState();

    const factorialNumero = () =>{
        let numero = num
        if (numero === 0 || numero === 1) {
            setFactorial(1)
          }
          for (var i = numero - 1; i >= 1; i--) {
            numero *= i;
          }
          setFactorial(numero)
    }

    return (
        <View style={styles.container}>
            <Text>Factorial de un numero</Text>
            <View>
                <Text>Ingrese el numero a calcular</Text>
                <View>
                    <TextInput 
                        keyboardType='numeric'
                        inputMode='decimal'
                        placeholder='ingrese numero'
                        multiline={true}
                        onChangeText={(value)=>{
                            setNum(value)
                        }}
                    />
                </View>
                <TouchableOpacity
                    onPress={factorialNumero}
                >
                    <Text>Calcular factorial</Text>
                </TouchableOpacity>
                {
                    factorial === undefined || isNaN(factorial) ? (<View />) : (
                        <TextInput 
                            multiline={true}
                            value={factorial.toString()}
                        />
                    )
                }
            </View>
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
});

//make this component available to the app
export default Factorial;
