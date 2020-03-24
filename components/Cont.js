import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

const INITIAL_NUMBER_OF_LINES = 2;

class ReadMore extends Component {
    constructor() {
        super();
        this.state = {
            isExpended: false
        }
    }


    handleReadMore = () => {
        this.setState(prevState => ({isExpended: !prevState.isExpended}))
    }

    render() {
        const { text } = this.props;
        return (
            <View >
                <Text numberOfLines={this.state.isExpended ? 0 : INITIAL_NUMBER_OF_LINES}>{text}</Text>
                <Button onPress={this.handleReadMore} title={this.state.isExpended ?"Read Less" : "Read More"}></Button>
            </View>
        );
    };
}

const styles = StyleSheet.create({

    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    baseText: {
        fontSize: 20,
        fontFamily: 'Cochin',
        marginVertical: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
});

export default ReadMore;
