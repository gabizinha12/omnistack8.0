import React, {useState} from 'react';
import './Login.css'
import api from '../services/api'
import logo from '../assets/logo.svg'


function Login({history}) {
    const [ username, setUsername] = useState('')

    async function HandleSubmit(e) {
     e.preventDefault();

     const response = await api.post('/devs', {
         username
     })

     const { _id } = response.data
       

     history.push(`/dev/${_id}`)
       console.log(response)
    }




    return (
         <div className="login-container">
                <form onSubmit={HandleSubmit}>
                <img src={logo} alt="Tindev" />
                 <input placeholder="Digite seu usuário no Github"
                 value={username}
                 onChange={e =>setUsername(e.target.value)}
                 />
                 <button type="submit">Enviar</button>
                </form>
         </div>
    );
}

export default  Login;