//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
const GradosCC = () => {

    const [celsius1, setcelsius1] = useState();
    const [kelvin, setKelvin] = useState();
    const [celsius2, setcelsius2] = useState();
    const [reamur, setReamur] = useState();

    const celsiusToKelvin = () =>{
        let res = parseFloat(celsius1) + 273.15;
        setKelvin(res);
    };

    const celsiusToReamur = () => {
        let res = parseFloat(celsius2) * 4/5;
        setReamur(res)
    };

    return (
        <View style={styles.container}>
            <Text>Conversor de grados centigrados</Text>
            <View style={styles.contenedorFunciones}>
                <View>
                    <Text>Centigrados a kelvin</Text>
                    <TextInput
                        keyboardType='numeric'
                        inputMode='decimal'
                        placeholder='ingrese ~C'
                        multiline={true}
                        onChangeText={(value)=>{
                            setcelsius1(value)
                        }}
                    />
                    <TouchableOpacity
                        onPress={celsiusToKelvin}
                    >
                        <Text>Converir</Text>
                    </TouchableOpacity>
                    {
                        kelvin === undefined || isNaN(kelvin) ? ( <View /> ) : (
                            <TextInput 
                                multiline={true}
                                value={kelvin.toString()}
                            />
                        )
                    }
                </View>
                <View>
                    <Text>Centigrados a reamur</Text>
                    <TextInput
                        keyboardType='numeric'
                        inputMode='decimal'
                        placeholder='ingrese ~C'
                        multiline={true}
                        onChangeText={(value)=>{
                            setcelsius2(value)
                        }}
                    />
                    <TouchableOpacity
                        onPress={celsiusToReamur}
                    >
                        <Text>Converir</Text>
                    </TouchableOpacity>
                    {
                        reamur === undefined || isNaN(reamur) ? ( <View /> ) : (
                            <TextInput 
                                multiline={true}
                                value={reamur.toString()}
                            />
                        )
                    }
                </View>
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
    contenedorFunciones: {
        width: '100%',
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});

//make this component available to the app
export default GradosCC;
