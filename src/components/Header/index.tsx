import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

import { SearchBar } from '../SearchBar';

export function Header() {
    const { container, textLogo } = styles;
    
    return (
        <View style={container}>
            <Text style={textLogo}>CCMM</Text>

            <SearchBar />
        </View>
    )
}