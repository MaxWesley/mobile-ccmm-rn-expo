import React from 'react';

import { View } from "react-native";

import { Header } from '../../components/Header';

import { styles } from './styles';

export function Home() {
    const { container } = styles;

    return(
        <View style={container}>
            <Header />
        </View>
    )
}