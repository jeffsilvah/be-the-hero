import React, {useState, useEffect} from 'react'
import {
    View, Text, Image, TouchableOpacity, FlatList
} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import logo from '../../assets/logo.png'

import api from '../../services/api'

const Incidents = () => {
    const navigation = useNavigation()

    const [incidents, setIncidents] = useState([])
    const [totalOfIncidents, setTotalOfIncidents] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const loadIncidents = async () => {
        if(loading){
            return
        }

        if(totalOfIncidents > 0 && incidents.length === totalOfIncidents){
            return
        }

        setLoading(true)

        const response = await api.get('/incidents', {
            params: {page}
        })

        setIncidents([...incidents, ...response.data])
        setTotalOfIncidents(response.headers['x-total-count'])
        setPage(page+1)
        setLoading(false)

    }

    useEffect(() => {
        loadIncidents()
    }, [])

    const navigateToDetails = (incident) => {
        navigation.navigate('Details', {incident})
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                <Text style={styles.headerText}>Total de <Text style={styles.strong}>{totalOfIncidents} caso(s)</Text></Text>
            </View>
            <View style={styles.infoText}>
                <Text style={styles.h1}>Bem-vindo(a)!</Text>
                <Text style={styles.label}>Escolha um dos casos abaixo e salve o dia</Text>
            </View>

            <FlatList 
                data={incidents} 
                keyExtractor={incident => String(incident.id)} 
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item}) => (
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.w50}>
                            <Text style={styles.strong}>Caso:</Text>
                            <Text style={styles.incidentInfo}>{item.title}</Text>
                        </View>

                        <View style={styles.w50}>
                            <Text style={styles.strong}>ONG:</Text>
                            <Text style={styles.incidentInfo}>{item.name}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.strong}>Valor:</Text>
                        <Text style={styles.incidentInfo}>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(item.value)}</Text>

                        <TouchableOpacity style={styles.button} onPress={() => navigateToDetails(item)}>
                            <Text style={styles.buttonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={18} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                </View>
            )} />
        </View>
    )
}

export default Incidents