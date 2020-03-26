import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import './Register.css'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    const handleRegister = async (e) => {
        e.preventDefault()

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try{
            const response = await api.post('ongs', data)

            alert(`Seu ID de acesso ${response.data.id}`)
            history.push('/')
        }catch(err){
            alert('Erro no cadastro, tente novamente')
        }


    }

    return(
        <div className="register-container">
            <div className="content">
                <div className="column-info">
                    <div className="logo"></div>
                    <div className="info">
                        <h2>Cadastro</h2>
                        <p>
                            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                        </p>
                        <Link to="/">
                            <FiArrowLeft size={16} color="#E02041" /> Voltar para o login
                        </Link>
                    </div>
                </div>
                <div className="register-form">
                    <form onSubmit={handleRegister}>
                        <input type="text" placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
                        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="phone" placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsApp(e.target.value)} />
                        <div className="region-area">
                            <input type="text" id="city" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
                            <input type="text" id="uf" placeholder="UF" value={uf} onChange={e => setUf(e.target.value)} />
                        </div>
                        <button>Cadastrar</button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Register