import React from "react";
import "./Forms.css";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            numPhone: ''
        }
    }

    handleChange = (event) => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onHandleSubmit(this.state);

        this.setState({
            name: '',
            email: '',
            numPhone: ''
        })
    }

    render() {
        // const name = this.state.name;
        // const email = this.state.email;
        // const numPhone = this.state.numPhone;

        const { name, email, numPhone } = this.state;

        return (
            <aside>
                <h2>Insira novos leads</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <form>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" placeholder="Ex.: Joao Pereira" onChange={this.handleChange} value={name} />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Ex.: user@email.com" onChange={this.handleChange} value={email} />
                    </div>

                    <div>
                        <label htmlFor="numPhone">Celular</label>
                        <input type="text" id="numPhone" placeholder="Ex.: +55 11 1111-11111" onChange={this.handleChange} value={numPhone} />
                    </div>
                    <button onClick={this.handleSubmit}>Cadastrar</button>
                </form>
            </aside>
        );
    }
}

export default Form;