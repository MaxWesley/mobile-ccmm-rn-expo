import React from 'react';

import { TouchableOpacity, View, Image, Text } from 'react-native';

type Props =  {
    name: string;
    description: string;
    image_url?: string;
}

import { styles } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Card({ name, description, image_url }: Props) {
    const { container, imageProfile, textName, textDescription } = styles;

    return(
        <TouchableOpacity style={container}>
            {image_url ?
                <Image 
                    source={{uri: image_url}} 
                />
                :
                <View style={imageProfile}>
                    <MaterialCommunityIcons 
                        name="face-profile" 
                        size={28} 
                        color="black" 
                    />
                </View>
            }
            <View>
                <Text style={textName}>{name}</Text>
                <Text style={textDescription}>{description}</Text>
            </View>
        </TouchableOpacity>
    )
}