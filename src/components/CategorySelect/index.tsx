import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { styles } from './style'

export function CategorySelect() {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >
            {}
        </ScrollView>
    )
}
