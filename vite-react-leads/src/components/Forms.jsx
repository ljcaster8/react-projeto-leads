import React from "react";
import Input from "../common-components/Input";
import "./Forms.css";

class Form extends React.Component {
    render() {
        return(
            <aside>
                <h2>Insira novos leads</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <form>
                        <Input 
                           id="nome"
                           label="Nome completo:"
                           placeholder="Ex.: Joao Pereira" />
                        
                        <Input 
                           id="email"
                           label="E-mail: "
                           placeholder="Ex.: user@email.com" />
                        
                        <Input 
                           id="celular"
                           label="Celular: "
                           placeholder="Ex.: +55 XX 1111-1111" />
                        <button>Cadastrar</button>
                </form>
            </aside>
        );
    }
}

export default Form;