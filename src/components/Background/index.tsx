import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    children: React.ReactNode;
}

export function Background({children}: Props) {
    const { container } = styles;
    const { background } = theme.colors;

    return(
        <LinearGradient 
            style={container} 
            colors={[background, background]}>
            {children}
        </LinearGradient>
    )
}