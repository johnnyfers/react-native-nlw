import React from 'react'
import {
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native'

import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import ButtonIcon from '../../components/ButtonIcon'

export function SignIn() {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            
            <Image
                style={styles.image}
                source={IllustrationImg}
            />

            <View style={styles.content} >
                <Text style={styles.title} >
                    Organize {`\n`}
                    suas jogatinas{`\n`}
                    facilmente {`\n`}
                </Text>

                <Text style={styles.subtitle} >
                    Crie grupos para jogar seus jogos {`\n`}
                    favoritos com seus amigos{`\n`}
                </Text>

                <ButtonIcon title={'Entre com discord'}/>
            </View>
        </View>
    )
}
