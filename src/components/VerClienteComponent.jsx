import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClienteService from "../services/ClienteService";

const VerClienteComponent = () => {
    const { id } = useParams(); // Obtiene el 'id' desde los parámetros de la URL
    const [cliente, setCliente] = useState({});

    useEffect(() => {
        // Cuando el componente se monta, obtenemos los detalles del cliente
        ClienteService.getClienteById(id)
            .then(respuesta => {
                setCliente(respuesta.data);
            })
            .catch(error => {
                console.error('Hubo un error al obtener los detalles del cliente:', error);
            });
    }, [id]); // Dependemos de 'id' para hacer la solicitud cuando cambia

    return (
        <div className="my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="mb-0">Ver Detalles de Cliente</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-sm table-striped table-bordered table-hover mb-0">
                                    <tbody>
                                        <tr>
                                            <th>Nombres Completos:</th>
                                            <td>{cliente.nombre}</td>
                                        </tr>
                                        <tr>
                                            <th>Apellidos Completos:</th>
                                            <td>{cliente.apellido}</td>
                                        </tr>
                                        <tr>
                                            <th>DNI:</th>
                                            <td>{cliente.dni}</td>
                                        </tr>
                                        <tr>
                                            <th>Celular:</th>
                                            <td>{cliente.celular}</td>
                                        </tr>
                                        <tr>
                                            <th>Email:</th>
                                            <td>{cliente.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Fecha de Nacimiento:</th>
                                            <td>{cliente.fechaNacimiento}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer text-end">
                            <button className="btn btn-primary"
                                onClick={() => window.location.href = 'http://localhost:3000/'}>
                                Regresar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerClienteComponent;
