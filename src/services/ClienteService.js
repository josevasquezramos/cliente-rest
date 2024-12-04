import axios from 'axios';

const CLIENTE_API_BASE_URL = "http://localhost:8091/cliente";

class ClienteService {

    getClientes() {
        return axios.get(CLIENTE_API_BASE_URL);
    }

    crearCliente(cliente) {
        return axios.post(CLIENTE_API_BASE_URL, cliente);
    }

    getClienteById(clienteId) {
        return axios.get(CLIENTE_API_BASE_URL + '/' + clienteId);
    }

    actualizarCliente(cliente) {
        return axios.put(CLIENTE_API_BASE_URL, cliente);
    }

    eliminarCliente(clienteId) {
        return axios.delete(CLIENTE_API_BASE_URL + '/' + clienteId);
    }
}

export default new ClienteService();