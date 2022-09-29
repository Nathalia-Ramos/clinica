import React from "react"
import COLORS from "../const/colos";
import Button from "../components/Button";

import { 
    View, 
    Text,
    StyleSheet, 
    SafeAreaView, 
    ScrollView } from "react-native";

import Input from "../components/Input"

const Cadastrar = () => {


    const [inputs, setInputs] = React.useState({
      nome: '',
      celular: '',
      email: '',
      nome_responsavel: '',
      telefone_responsavel: ''
    });

    return(

          <SafeAreaView> 

            <ScrollView> 
            <View style={estilos.viewForm}>
                  <Text style={estilos.textTitle}>
                    Symbian
                  </Text>
                  
        
                       <Input style={estilos.text}
                            label="Nome completo" 
                            onFocus={()=>{handlerErrors(null, 'nome')}}/>
                      
                       <Input 
                            label="Telefone"
                            onFocus={()=>{handlerErrors(null, 'telefone')}}/>
                      
                       <Input 
                            label="Celular" 
                            onFocus={()=>{handlerErrors(null, 'celular')}}
                            />

                       <Input
                            label="E-mail"
                            onFocus={()=>{handlerErrors(null, 'email')}}/>
                    
                       <Input 
                            label="Nome responsavel"
                            onFocus={()=>{handlerErrors(null, 'nome_responsavel')}} />
                        
                       <Input 
                            label="Telefone responsavel" 
                            onFocus={()=>{handlerErrors(null, 'telefone_responsavel')}}/>
          
                  </View>

          </ScrollView>
        </SafeAreaView> 
    
    )
    
}

export default Cadastrar    
        
    const estilos = StyleSheet.create({
      
    
      viewForm:{
        height :1000,
        backgroundColor: "#031D5D"
      },
     
      label:{
        fontStyle: COLORS.black,
      },
      textTitle: {
        fontSize: 40,
        marginTop: 10,
        alignItems: "center",
        color: COLORS.white
      }

  
    });
  