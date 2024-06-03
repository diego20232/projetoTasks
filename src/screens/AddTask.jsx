import React, { Component } from "react";
import { Modal, StyleSheet, TouchableWithoutFeedback, Text, TouchableOpacity, TextInput, Platform } from "react-native";

import estilo from "./estilo";
import moment from "moment";

import DateTimePicker from '@react-native-community/datetimepicker'


export default class AddTas extends Component {

    render() {
        return (
            <Modal
            transparent={true}
            visible={this.props.isVisible}
            onRequestClose={this.onCancel}
            animationType="slide"
            >

            </Modal>
        )
    }
}