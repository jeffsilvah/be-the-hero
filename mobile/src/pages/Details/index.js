import React from 'react'
import {
    View, Text, Image, TouchableOpacity, Linking
} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles'
import logo from '../../assets/logo.png'

const Details = () => {
    const navigation = useNavigation()
    const route = useRoute()

    const {incident} = route.params

    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso: "${incident.title}", com o valor de ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incident.value)}`

    const handleBack = () => {
        navigation.goBack()
    }

    const sendMail = () => {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })                
    }

    const sendWhatsApp = () => {
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                    <Image source={logo} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={handleBack}>
                    <Feather name="arrow-left" size={30} color="#e02041"  />
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.w50}>
                        <Text style={styles.strong}>Caso:</Text>
                        <Text style={styles.incidentInfo}>{incident.title}</Text>
                    </View>

                    <View style={styles.w50}>
                        <Text style={styles.strong}>ONG:</Text>
                        <Text style={styles.incidentInfo}>{incident.name} de {incident.city}/{incident.uf}</Text>
                    </View>
                </View>
                <View style={styles.cardDescription}>
                    <Text style={styles.strong}>Descrição:</Text>
                    <Text style={styles.incidentInfo}>{incident.description}</Text>
                </View>
                <View>
                    <Text style={styles.strong}>Valor:</Text>
                    <Text style={styles.incidentInfo}>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.strong}>Salve o dia!</Text>
                <Text style={styles.strong}>Seja o herói deste caso</Text>
                <Text style={styles.incidentInfo}>Entre em contato</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={sendWhatsApp}>
                        <Text style={styles.buttonText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={sendMail}>
                        <Text style={styles.buttonText}>E-mail</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

export default Details