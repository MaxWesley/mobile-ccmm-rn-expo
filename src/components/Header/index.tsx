import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

export function Header() {
    const { container, textLogo } = styles;
    return(
        <View style={container}>
            <Text style={textLogo}>CCMM</Text>
        </View>
    )
}