import React, {Component} from "react";
import {Container, List} from "semantic-ui-react";
import Answer from "./answer";
import User from "./user";


class Ranking extends Component {
    render() {
        return (
            <>
                <Container textAlign="center">
                    <h2>RANKING</h2>
                    <p>Who is the Quiz Master?</p>
                </Container>
                <Container>
                    <List verticalAlign="left">
                        <User picture=""
                              name="Alcione Ribeiro"
                              points="100"/>
                        <User picture=""
                              name="Kelly Cuoco"
                              points="90"/>
                        <User picture=""
                              name="Pedro "
                              points="10"/>
                    </List>
                </Container>
            </>
        )
    }
}

export default Ranking;