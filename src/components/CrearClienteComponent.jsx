import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ClienteService from '../services/ClienteService';

const CrearClienteComponent = () => {
    const { id } = useParams(); // Hook para obtener el parámetro `id` de la URL
    const navigate = useNavigate(); // Hook para realizar la navegación
    const isAdding = id === "_add"; // Verifica si se está creando un nuevo cliente

    const [cliente, setCliente] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        celular: '',
        email: '',
        fechaNacimiento: ''
    });

    useEffect(() => {
        if (!isAdding) {
            ClienteService.getClienteById(id).then((respuesta) => {
                setCliente(respuesta.data);
            }).catch(error => {
                console.error("Error al obtener cliente:", error);
            });
        }
    }, [id, isAdding]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };

    const agregarActualizarCliente = (e) => {
        e.preventDefault();
    
        // Sumar un día a la fecha de nacimiento
        const fechaNacimiento = new Date(cliente.fechaNacimiento);
        fechaNacimiento.setDate(fechaNacimiento.getDate() + 1);  // Suma un día
    
        // Formatear la fecha en formato 'yyyy-MM-dd'
        const fechaNacimientoISO = fechaNacimiento.toISOString().split('T')[0];  // Esto da formato 'YYYY-MM-DD'
    
        // Crear el cliente o actualizarlo con la fecha modificada
        const clienteConFecha = { ...cliente, fechaNacimiento: fechaNacimientoISO };
    
        if (isAdding) {
            ClienteService.crearCliente(clienteConFecha)
                .then(() => navigate("/clientes"))
                .catch(error => console.error("Error al crear cliente:", error));
        } else {
            ClienteService.actualizarCliente({ ...clienteConFecha, id })
                .then(() => navigate("/clientes"))
                .catch(error => console.error("Error al actualizar cliente:", error));
        }
    };

    const cancel = () => {
        navigate("/clientes");
    };

    const getTitle = () => {
        return isAdding
            ? <h5 className="mb-0">Agregar Cliente</h5>
            : <h5 className="mb-0">Actualizar Cliente</h5>;
    };

    return (
        <div className="my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            {getTitle()}
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombres:</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        className="form-control"
                                        placeholder="Nombres completos"
                                        value={cliente.nombre}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="apellido" className="form-label">Apellidos:</label>
                                    <input
                                        type="text"
                                        id="apellido"
                                        name="apellido"
                                        className="form-control"
                                        placeholder="Apellidos completos"
                                        value={cliente.apellido}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="dni" className="form-label">DNI:</label>
                                    <input
                                        type="text"
                                        id="dni"
                                        name="dni"
                                        className="form-control"
                                        placeholder="Ingrese DNI"
                                        value={cliente.dni}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="celular" className="form-label">Celular:</label>
                                    <input
                                        type="text"
                                        id="celular"
                                        name="celular"
                                        className="form-control"
                                        placeholder="Número celular"
                                        value={cliente.celular}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Correo electrónico"
                                        value={cliente.email}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento:</label>
                                    <input
                                        type="date"
                                        id="fechaNacimiento"
                                        name="fechaNacimiento"
                                        className="form-control"
                                        value={cliente.fechaNacimiento}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={agregarActualizarCliente}
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={cancel}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrearClienteComponent;
