//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'

// create a component
const NumeroSuerte = () => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    console.log(date.getDate());
    console.log(date.getFullYear());
    console.log(date.getMonth() + 1);


//     let numeroSuerte = numeroNacimiento;
// while (numeroSuerte > 9) {
//   let digitos = numeroSuerte.toString().split('');
//   numeroSuerte = digitos.reduce((suma, digito) => suma + parseInt(digito), 0);
// }

    return (
        <View style={styles.container}>
            <Text>NumeroSuerte</Text>
            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
                androidVariant='nativeAndroid'
                theme='dark'
                mode='date'
                modal={true}
                open={open}
                date={date}
                onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                }}
                onCancel={() => {
                setOpen(false)
                }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default NumeroSuerte;
