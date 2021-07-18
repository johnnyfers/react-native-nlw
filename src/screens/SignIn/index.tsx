import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'

import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import ButtonIcon from '../../components/ButtonIcon'

export function SignIn() {
    return (
        <View style={styles.container}>
       
            <Image
                style={styles.image}
                source={IllustrationImg}
            />

            <View style={styles.content} >
                <Text style={styles.title} >
                    Conecte-se {`\n`}
                    e orgenize suas {`\n`}
                    jogatinas 
                </Text>

                <Text style={styles.subtitle} >
                    Crie grupos para jogar seus jogos {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon title={'Entre com discord'} />
            </View>
        </View>
    )
}
