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
        alignItems: 'center'
    },
    headerText: {

    },
    strong: {
        fontWeight: 'bold'
    },
    infoText: {
        marginTop: 15,
        marginBottom: 15
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    label: {
        color: '#777',
        marginTop: 10
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 10,
        marginBottom: 30,
        elevation: 3
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    w50: {
        width: '50%'
    },
    incidentInfo: {
        color: '#777',
        marginTop: 10
    },

    button:{
        padding: 5,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonText: {
        color: '#e02041',
    }

})

export default styles