import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Consulta from './pages/consultaPet'

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Consulta />} />
            </Routes>
        </BrowserRouter>
    )
}