import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Copyright() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Feito com ♥ por{' '}
                <a
                    className="underline underline-offset-2"
                    href="https://github.com/pncsoares"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Pedro Soares
                </a>
            </Text>
        </View>
    );
}
