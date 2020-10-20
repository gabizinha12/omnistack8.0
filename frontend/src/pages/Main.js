import React, { useEffect, useState } from 'react'

import './Main.css'

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'
import api from '../services/api';

export default function Main({ match }) {
    const [users, setUsers] = useState([])

    useEffect( () => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id
                }
            })

            setUsers(response.data)
        }

        loadUsers()
    }, [match.params.id])


    async function handleLike(id) {
        console.log('like', id)
        await api.post(`/devs/${id}/likes`, null, {
            headers: {user: match.params.id}
        })

        setUsers(users.filter(user => user._id !== id))
    }

    async function handleDislike(id) {
        console.log('dislike', id)
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {user: match.params.id}
        })

        setUsers(users.filter(user => user._id !== id))
    }

    return (
        <div className="main-container">
                <img src={logo} alt="Logo Tindev" />

            { users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name}/>
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>

                            <div className="buttons">
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={dislike} alt="Dislike" />
                                </button>

                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="Like" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
            <div className="empty">Sem devs no momento!</div>
            )}
        </div>
    )
}