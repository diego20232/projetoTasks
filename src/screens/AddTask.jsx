import React, { Component } from "react";
import { Modal, StyleSheet, TouchableWithoutFeedback, Text, TouchableOpacity, TextInput, Platform, View } from "react-native";

import estilo from "./estilo";
import moment from "moment";

import DateTimePicker from '@react-native-community/datetimepicker'
import { flingGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler";

const initialState = {desc: '', date: new Date(), showDatePicker: false}

export default class AddTas extends Component {

    state = {
        ...initialState
    }

    save = () => {
        const newTask = {
            desc: this.state.desc,
            date: this.state.date
        }

        this.props.onSave && this.props.onSave(newTask)
        this.setState({...initialState})
    }

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.props.isVisible}
                onRequestClose={this.onCancel}
                animationType="slide"
            >
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe a descrição"
                    />


                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}
                        >
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create(
    {
        background: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.7)'
        },

        container: {
            backgroundColor: '#FFF'
        },

        header: {
            fontFamily: estilo.fontFamily,
            backgroundColor: estilo.colors.today,
            color: estilo.colors.secundary,
            textAlign: 'center',
            padding: 15,
            fontSize: 18,
        },

        input: {
            fontFamily: estilo.fontFamily,
            height: 40,
            margin: 15,
            backgroundColor: '#FFF',
            borderWidth: 1,
            borderColor: '#E3E3E3',
            borderRadius: 6,
        },

        buttons: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },

        button: {
            margin: 20,
            marginRight: 20,
            color: estilo.colors.today,
        },

        date: {
            fontFamily: estilo.fontFamily,
            fontSize: 20,
            marginLeft: 15,
        }
    }
)