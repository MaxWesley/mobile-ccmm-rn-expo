import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

import { SearchBar } from '../SearchBar';

export function Header() {
    const { container, textLogo, labelBusca, textLabel1, textLabel2 } = styles;
    
    return (
        <View style={container}>
            <Text style={textLogo}>CCMM</Text>
            <SearchBar />
            <View style={labelBusca}>
                <Text>
                    <Text style={textLabel1}>Resultado da busca: </Text>
                    <Text style={textLabel2}>Todos moradores</Text>
                </Text>
            </View>
        </View>
    )
}