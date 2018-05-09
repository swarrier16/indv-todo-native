import React, { Component } from 'react';
// import CheckBox from 'react-native-check-box';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';


export default class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textColor: 'red',
    };
    }

    changeStyle() {

        this.setState({
          textColor: 'green',
            textDecorationLine: 'line-through',
        })

    };

    render() {

       return (

            <View key={this.props.keyval} style={styles.note}>

                <TouchableOpacity onPress={ () => this.changeStyle()} style={{ height: 30, flexDirection: 'row' }}>
                    {/*<Text style={styles.noteText}>{this.props.val.date}</Text>*/}
                    <TextInput underlineColorAndroid='transparent' style={[styles.noteText,{color:this.state.textColor}, {textDecorationLine: this.state.textDecorationLine}]}>
                        {this.props.val.note}
                    </TextInput>
                </TouchableOpacity>


                <View style={styles.container}>
                {/*<TouchableOpacity onPress={this.props.EditMethod} style={styles.noteEdit}>*/}
                    {/*<Text style={styles.noteEditText}>Edit</Text>*/}
                {/*</TouchableOpacity>*/}

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>Delete</Text>
                </TouchableOpacity>


                </View>
            </View>
        );


    }






}


const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
        //color:'red'
    },
    noteDelete: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 5,
        top: 10,
        bottom: 10,
        right: 10,
        flex: 1,
        width: 80,
        height: 40
    },
    noteDeleteText: {
        color: 'white'
    },
    noteEdit: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 100,
        flex: 1,
        width: 80,
        height: 40
    },
    noteEditText: {
        color: 'white'
    },
    noteCompleteText: {
        color: 'green',
    }
});