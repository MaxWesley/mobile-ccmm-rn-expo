import React from 'react';

import { StatusBar } from 'react-native';

import { Background } from './src/components/Background';

import { Home } from './src/screens/Home';

import {Footer } from './src/components/Footer';

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
      <Footer />
    </Background>
  );
}