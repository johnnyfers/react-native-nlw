import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

type Props = {
    title: string
}

export default function Buttondex({title}: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image
                    source={DiscordImg} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
