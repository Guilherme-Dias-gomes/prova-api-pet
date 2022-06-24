
import { Mostrarpets, BuscarPorNome } from '../../api/petApi'


import './index.scss'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'


export default function Index() {
    const [pet, setPet] = useState([]);

    const [nome, setNome] = useState();

    async function todosPets() {
        const resp = await Mostrarpets();
        setPet(resp);
    }

    
    useEffect(() => {
        todosPets();
    }, [])

    return(
        <main>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                    </tr>
                </thead>
                <tbody>

                    {pet.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                        </tr>
                    )}
                
                </tbody>
            </table>

            <button>
                <Link to = '/cadastro'>cadastro</Link>
            </button>

        </main>
    )
}

