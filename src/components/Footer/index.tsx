import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

export function Footer() {
    const { container, textDev, textName } = styles;

    return (
        <View style={container}>
            <Text style={textDev}>Developed by </Text>
            <Text style={textName}>Max Wesley</Text>
        </View>
    )
}