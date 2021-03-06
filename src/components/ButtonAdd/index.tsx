import React from 'react'
import { View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import { styles } from './style'

export function ButtonAdd({...rest}: RectButtonProps) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <MaterialCommunityIcons
                name='plus'
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    )
}
