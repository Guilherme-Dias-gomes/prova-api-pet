import './index.scss'
import { useState } from 'react';
import { BuscarPorNome } from '../../api/petApi';

import { Link } from 'react-router-dom'



export default function Index() {

    const [nome, setNome] = useState('');

    async function salvarClick() {
    try {
        const r = await BuscarPorNome(nome);
        alert ('per cadastrado')
    } catch (err) {
        alert (err.response.data.erro);
    }
}

    return(
        <main>
            <input type='text' value={nome} onChange={e => setNome(e.target.value)}></input>
            <br></br>
            <button onClick={salvarClick}>Cadastrar</button>
            <Link to = '/'>consultar</Link>
        </main>
    )
}