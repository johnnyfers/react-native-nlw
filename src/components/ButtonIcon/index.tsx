import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

type Props = RectButtonProps & {
    title: string
    handlerSignIn: ()=> void

}

export default function Buttondex({title, handlerSignIn}: Props) {
    return (
        <RectButton
            onPress={handlerSignIn}
            activeOpacity={0.7}
            style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image
                    source={DiscordImg} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}
