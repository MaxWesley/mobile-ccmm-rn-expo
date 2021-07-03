import React from 'react';

import { View, TextInput } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';

export function SearchBar() {
    const { container, icon, textInput } = styles;
    
    return (
        <View style={container}>
            <FontAwesome
                name="search"
                size={15}
                color="#8D8D8D"
                style={icon}
            />
            <TextInput
                style={textInput}
                placeholder="Buscar por morador"
                placeholderTextColor="#D1D1D155"
            />
        </View>
    )
}