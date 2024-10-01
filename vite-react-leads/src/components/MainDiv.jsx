import React from "react";
import Form from "./Forms";
import TableLeads from "./TableLeads";

class Main extends React.Component {
    render() {
        return(
            <main>
                <Form />
                <TableLeads />
            </main>
        );
    }
}

export default Main;