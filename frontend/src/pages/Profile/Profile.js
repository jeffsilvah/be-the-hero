import React, {useState, useEffect} from 'react'
import {FiPower, FiTrash2} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'

import api from '../../services/api'

import './Profile.css'

const Profile = () => {
    const [incidents, setIncidents] = useState([])

    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    useEffect(() => {
        if(!ongId){
            history.push('/')
        }
    })

    useEffect(() => {
        api.get('profile', {
            headers: {
                authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })

    }, [ongId])

    const handleDeleteIncident = async (id) => {
        try{
            setIncidents(incidents.filter(incident => incident.id !== id))

            await api.delete(`incidents/${id}`, {
                headers: {
                    authorization: ongId
                }
            })
        }catch(err){
            alert('Erro ao deletar, tente novamente')
        }
    }

    const handleLogout = () => {
        localStorage.clear()

        history.push('/')
    }

    return(
        <div className="profile-container">
            <header>
                <div className="left-content">
                    <div className="logo"></div>
                    <span>Bem vindo(a), <strong>{ongName}</strong></span>
                </div>
                <div className="right-content">
                    <Link id="new" to="/incidents/new">Cadastrar novo caso</Link>
                    <Link onClick={handleLogout} id="logout" to="">
                        <FiPower size={18} color="#E02041" />
                    </Link>
                </div>
            </header>

            <div className="incidents-container">
                <h2>Casos cadastrados</h2>
                <div className="cards">

                    {
                        incidents.length === 0
                        ? <h2 className="empty">Nenhuma ação cadastrada</h2>
                        : (incidents.map(incident => (
                            <div key={incident.id} className="card">
                                <div className="card-header">
                                    <div className="right-content">
                                        <h3>Caso: </h3>
                                        <p>{incident.title}</p>
                                    </div>
                                    <div className="left-content">
                                        <button onClick={() => handleDeleteIncident(incident.id)}>
                                            <FiTrash2 size={18} color="gray" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-description">
                                    <h3>Descrição:</h3>
                                    <p>{incident.description}</p>
                                </div>
                                <div className="card-value">
                                    <h3>Valor:</h3>
                                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                                </div>
                            </div>
                        )))
                    }

                </div>

            </div>
        </div>
    )
}

export default Profile