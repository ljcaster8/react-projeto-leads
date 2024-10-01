import React from "react";
import TableRow from "./TableRow";

class TableLeads extends React.Component {
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Celular</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow 
                        name="Jao"
                        email="jao@com"
                        numPhone="111111"
                    />
                </tbody>
            </table>
        );
    }
}

export default TableLeads;