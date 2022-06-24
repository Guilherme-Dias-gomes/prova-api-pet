import axios from 'axios'
const api = axios.create({
    baseURL: 'http//localhost:5000'
})

export async function Mostrarpets() {
    const resposta = await api.get('/pet');
    return resposta.data;
}

