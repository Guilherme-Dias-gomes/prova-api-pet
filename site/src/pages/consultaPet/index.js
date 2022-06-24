
import { Mostrarpets } from '../../api/petApi'


import './index.scss'
import { useEffect, useState } from 'react'


export default function Index() {
    const [pet, setPet] = useState([]);


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
        </main>
    )
}