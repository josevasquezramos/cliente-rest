import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClienteService from '../services/ClienteService';

const ListarClientesComponent = () => {
    const [clientes, setClientes] = useState([]);
    const navigate = useNavigate(); // Hook de navegación

    useEffect(() => {
        // Esto reemplaza el `componentDidMount`
        ClienteService.getClientes().then((respuesta) => {
            setClientes(respuesta.data);
        });
    }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

    const agregarCliente = () => {
        navigate('/add-cliente/_add');
    };

    const editarCliente = (id) => {
        navigate('/add-cliente/' + id);
    };

    const eliminarCliente = (id) => {
        ClienteService.eliminarCliente(id).then(() => {
            setClientes(clientes.filter(cliente => cliente.id !== id));
        });
    };

    const verCliente = (id) => {
        navigate('/view-cliente/' + id);
    };

    return (
        <div className="my-5">
            <div className="card">
                <div className="card-header">
                    <h4 className="mb-0">
                        <i class="bi bi-table me-2"></i>
                        Lista de Clientes
                    </h4>
                </div>
                <div className="card-body">
                    <button className="btn btn-primary w-100 mb-3" onClick={agregarCliente}>
                        Agregar Cliente
                    </button>

                    <div className="">
                        <table className="table table-striped table-bordered mb-0">
                            <thead>
                                <tr>
                                    <th>Cliente Apellidos</th>
                                    <th>Cliente Nombres</th>
                                    <th>Cliente Email</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map(cliente => (
                                    <tr key={cliente.id}>
                                        <td>{cliente.apellido}</td>
                                        <td>{cliente.nombre}</td>
                                        <td>{cliente.email}</td>
                                        <td>
                                            {/* Dropdown solo visible en pantallas pequeñas */}
                                            <div className="dropdown d-block d-lg-none">
                                                <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id={`dropdownMenuButton-${cliente.id}`} data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-three-dots"></i> {/* Ícono de tres puntos */}
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`dropdownMenuButton-${cliente.id}`}>
                                                    <li><a className="dropdown-item" onClick={() => editarCliente(cliente.id)}><i className="bi bi-pencil-fill"></i> Editar</a></li> {/* Ícono de lápiz para editar */}
                                                    <li><a className="dropdown-item" onClick={() => eliminarCliente(cliente.id)}><i className="bi bi-trash-fill"></i> Eliminar</a></li> {/* Ícono de papelera para eliminar */}
                                                    <li><a className="dropdown-item" onClick={() => verCliente(cliente.id)}><i className="bi bi-eye-fill"></i> Ver</a></li> {/* Ícono de ojo para ver */}
                                                </ul>
                                            </div>

                                            {/* Botones visibles solo en pantallas grandes */}
                                            <div className="d-none d-lg-block">
                                                <button className="btn btn-info" onClick={() => editarCliente(cliente.id)}>
                                                    <i className="bi bi-pencil-fill"></i> Editar
                                                </button>
                                                <button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={() => eliminarCliente(cliente.id)}>
                                                    <i className="bi bi-trash-fill"></i> Eliminar
                                                </button>
                                                <button className="btn btn-warning" style={{ marginLeft: "10px" }} onClick={() => verCliente(cliente.id)}>
                                                    <i className="bi bi-eye-fill"></i> Ver
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListarClientesComponent;
