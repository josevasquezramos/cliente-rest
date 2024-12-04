import React, { Component } from 'react'

class FooterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <footer className="footer bg-light text-center py-5">
                    <span className="text-muted">
                        Todos los Derechos Reservados @Sistemas 2024
                    </span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
