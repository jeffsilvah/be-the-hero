import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'

import './Login.css'

const Login = () => {
    const [id, setId] = useState('')

    const history = useHistory()

    const handleLogin = async (e) => {
        e.preventDefault()

        try{
            const response = await api.post('/sessions', {id})

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')

        }catch(err){
            alert('Tente novamente')
        }

    }

    return(
        <div className="login-container">
            <div className="form-area">
                <div className="logo"></div>
                <form onSubmit={handleLogin}>
                    <h2>Faça seu login</h2>
                    <input type="text" placeholder="Seu ID" value={id} onChange={e => setId(e.target.value)} />
                    <button>Entrar</button>
                    <Link to="/register"><FiLogIn size={16} color="#E02041" /> Não tenho cadastro</Link>
                </form>
            </div>
            <div className="heroes-image"></div>
        </div>
    )
}

export default Login