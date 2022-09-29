import React from "react";
import COLORS from "../const/colos";

import {Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    TextInput} from "react-native";

const Input = ({label, error}) => {
    return (
        <SafeAreaView>

            <View style= {estilos.formContainer}>

    
             <Text style={estilos.inputLabel}>{label}</Text>
    
                <View>
                    <TextInput style={estilos.TextInput} />
                </View>

            </View>

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({

    InputContainer:{
        margin: 10
    },
    inputLabel:{
        height: 50,
        fontSize:20,
        color:COLORS.white,
        marginTop: 20
      
    },

})

export default Input