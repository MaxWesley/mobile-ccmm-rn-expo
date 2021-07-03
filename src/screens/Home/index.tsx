import React from 'react';

import { View, ScrollView, Text } from "react-native";

import { Header } from '../../components/Header';

import { styles } from './styles';

import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

export function Home() {
    const { container, containerCards } = styles;

    return (
        <View style={container}>
            <Header />
            <ScrollView style={containerCards}>
                <Card
                    name="Max Wesley"
                    description="Avenida Querqueiro, n7 casa 3"
                />
                <Card
                    name="Max Wesley"
                    description="Avenida Querqueiro, n7 casa 3"
                />
                <Card
                    name="Max Wesley"
                    description="Avenida Querqueiro, n7 casa 3"
                />
                <Card
                    name="Max Wesley"
                    description="Avenida Querqueiro, n7 casa 3"
                />
                <Card
                    name="Max Wesley"
                    description="Avenida Querqueiro, n7 casa 3"
                />
                <Card
                    name="Max Wesley"
                    description="Avenida Querqueiro, n7 casa 3"
                />
                <Card
                    name="Max Wesley"
                    description="Avenida Querqueiro, n7 casa 3"
                />
                <Card
                    name="Max Wesley"
                    description="Avenida Querqueiro, n7 casa 3"
                />
            </ScrollView>
        </View>
    )
}