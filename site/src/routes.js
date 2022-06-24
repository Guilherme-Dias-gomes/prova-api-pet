import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Consulta from './pages/consultaPet'
import Cadastro from './pages/cadastrarPet'

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Consulta />} />
                <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}