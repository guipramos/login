import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text } from "react-native";

const Input = (props) => {

    const [input, setInput] = useState('');

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.inputStyle}
                placeholderTextColor="#000"
                placeholder
                value={input}
                onChangeText={setInput}
                {...props}
            />
            <Text>{console.log(input)}</Text>
        </View>
    );    
}

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "transparent",
        borderRadius: 8,
        marginBottom: 20,
        paddingLeft: 20,
    },
    error: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingLeft: 20,
    },
})

export default Input;