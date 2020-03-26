import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import './NewIncident.css'

const NewIncident = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    useEffect(() => {
        if(!ongId){
            history.push('/')
        }
    })

    const handleCreateIncident = async (e) => {
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    authorization: ongId
                }
            })

            setTitle('')
            setDescription('')
            setValue('')
            
        } catch (err) {
            alert('Ocorreu um erro, tente novamente')            
        }

    }

    return(
        <div className="incident-container">
        <div className="content">
            <div className="column-info">
                <div className="logo"></div>
                <div className="info">
                    <h2>Cadastrar novo caso</h2>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>
                    <Link to="/profile">
                        <FiArrowLeft size={16} color="#E02041" /> Voltar para home
                    </Link>
                </div>
            </div>
            <div className="incident-form">
                <form onSubmit={handleCreateIncident}>
                    <input type="text" placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição"></textarea>
                    <input type="number" placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)} />
                    <button>Cadastrar</button>
                </form>
            </div>
            
        </div>
    </div>
    )
}

export default NewIncident