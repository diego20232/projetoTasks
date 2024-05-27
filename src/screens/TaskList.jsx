import React from "react";
import { SafeAreaView, Text, ImageBackground, StyleSheet, View } from "react-native";
import todayImage from '../../assets/imgs/today.jpg';


export default props => {

    return (
        <SafeAreaView style={style.container}>
            <ImageBackground source={todayImage} style={style.background}>
            </ImageBackground>
            <Text style={style.taskList}>Task List</Text>
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
        }
    }
)