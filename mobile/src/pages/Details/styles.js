import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        padding: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    strong: {
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 10,
        marginBottom: 20
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    cardDescription: {
        marginBottom: 15
    },
    w50: {
        width: '50%'
    },
    incidentInfo: {
        color: '#777',
        marginTop: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    button: {
        backgroundColor: '#e02041',
        padding: 12,
        width: '49%',
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18
    }
})

export default styles