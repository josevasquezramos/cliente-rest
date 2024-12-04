import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="sticky-top">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="container">
                            <a href="http://localhost:3000" className="navbar-brand">
                                <i class="bi bi-people-fill me-2"></i>
                                Cliente Management App
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                {/* Aquí puedes añadir más elementos si lo deseas, como un enlace o un botón */}
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;
