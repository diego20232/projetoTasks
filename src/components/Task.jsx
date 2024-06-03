import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

import estilo from "../screens/estilo";
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from "moment";
import 'moment/locale/pt-br'


export default props => {

    const tarefaConcluidaNao = props.concluidaEm != null ?
    { textDecorationLine: 'line-through'} : {}

    const date = props.concluidaEm ? props.concluidaEm : props.dataEstimada

    const today = moment().locale('pt-br').subtract(10, 'days').calendar();

    return (
        <View style={style.container}>
            <TouchableWithoutFeedback
            onPress={() => props.toggleTask(props.id)}
            >
            <View style={style.checkContainer}>
                {getCheckView(props.concluidaEm)}
            </View>
            </TouchableWithoutFeedback>

                <View>
                <Text style={[style.descricao, tarefaConcluidaNao]}>{props.descricao}</Text>
                <Text style={style.date}>{today}</Text>
                </View>
           
           
        </View>
    )
}
function getCheckView(concluidaEm) {
    if (concluidaEm != null) {
        return (
            <View style={style.dataEstimada}>
                <Icon name='check' size={20} color='black'/>
            </View>
        )
    } else { 
        return (
            <View style={style.pendente}>
                 
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#2c2c2c',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    pendente: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    dataEstimada: {
       height: 25,
       width: 25,
       borderRadius: 13,
       borderWidth: 1,
       backgroundColor: '#4D7031',
       alignItems: 'center',
       justifyContent: 'center'
    },
    descricao: {
        color: estilo.colors.mainText,
        fontSize: 15,
    },
    date: {
        fontFamily: estilo.fontFamily,
        color: estilo.colors.subText,
        fontSize: 13,
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

