import React from 'react'
import { NavLink } from 'react-router-dom'
import './Enlaces.css'
const Enlaces = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/'> Count </NavLink>
                <NavLink to='RelojDigital'> Reloj </NavLink>
                <NavLink to='Timer'> Timer </NavLink>
                <NavLink to='LoginForm'> Login </NavLink>
            </li>
        </ul>
    </div>
    )
  }


export default Enlaces
