import React from "react";
import { SafeAreaView, Text, ImageBackground, StyleSheet, View } from "react-native";
import todayImage from '../../assets/imgs/today.jpg';
import moment from 'moment';
import 'moment/locale/pt-br'
import estilo from "./estilo";
import Task from "../components/Task";
import { FlatList, GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootViewProps } from "react-native-gesture-handler";
export default props => {

      const tasks = [
        {
            id: 1, descricao: 'Tarefa realizada', dataEstimada: new Date(), concluidaEm: false,
        },
        {
            id: 2, descricao: 'Tarefa não realizada', dataEstimada: new Date(), concluidaEm: null,
        },
        {
            id: 3, descricao: 'Tarefa realizada', dataEstimada: new Date(), concluidaEm: false,
        },
        {
            id: 4, descricao: 'Tarefa não realizada', dataEstimada: new Date(), concluidaEm: null,
        }, 
        {
            id: 5, descricao: 'Tarefa não Realizada', dataEstimada: new Date(), concluidaEm: false,
        },
        {
            id: 6, descricao: 'Tarefa entregue', dataEstimada: new Date(), concluidaEm: null,
        },
        {
            id: 7, descricao: 'Livro não entregue', dataEstimada: new Date(), concluidaEm: false,
        },
        {
            id: 8, descricao: 'Livro não entregue', dataEstimada: new Date(), concluidaEm: null,
        }, 
        {
            id: 9, descricao: 'Livro não entregue', dataEstimada: new Date(), concluidaEm: false,
        }, 
        {
            id: 10, descricao: 'Livro não entregue', dataEstimada: new Date(), concluidaEm: null,
        },
        {
            id: 11, descricao: 'Livro não entregue', dataEstimada: new Date(), concluidaEm: false,
        }, 
        {
            id: 12, descricao: 'Livro não entregue', dataEstimada: new Date(), concluidaEm: null
        }
      ]

    const today = moment().locale('pt-br').format('LL')

    return (
        <SafeAreaView style={style.container}>

            <ImageBackground source={todayImage} style={style.background}>
                <View style={style.titleBar}>
                    <Text style={style.title}>Hoje</Text>
                    <Text style={style.subTitle}>{today}</Text>
                </View>
            </ImageBackground>



           
            <GestureHandlerRootView style={{flex: 7}}>
    <ScrollView>
               <FlatList
               data={tasks}
               keyExtractor={item => item.id}
               renderItem={({item}) => (
                <Task
                descricao={item.descricao}
                dataEstimada={item.dataEstimada}
                concluidaEm={item.concluidaEm}/>
               )}/>

                
</ScrollView>
           </GestureHandlerRootView>
          
        </SafeAreaView>
    )
}



const style = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
         
        background: {
            flex: 3,
        },
        taskList: {
            flex: 7
        },
        titleBar: {
            flex: 1,
            justifyContent: 'flex-end',
        },
        title: {
            fontFamily: estilo.fontFamily,
            fontSize: 50,
            color: estilo.colors.secundary,
            marginLeft: 20,
            marginBottom: 20,
        },
        subTitle: {
            fontFamily: estilo.fontFamily,
            fontSize: 20,
            color: estilo.colors.secundary,
            marginLeft: 20,
            marginBottom: 20,
        }
        
    }
)