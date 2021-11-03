import React, {Component} from "react";
import {List, Container} from "semantic-ui-react";
import Answer from "./answer";

const answerData = {
    id: 1,
    title: "First Question",
    alternative: 3
}


class Result extends Component {
    render() {
        return (
            <div>
                <Container textAlign="center">
                    <h2>Your result!</h2>
                    <p>Check your performance in this category</p>
                </Container>
                <Container>
                    <List verticalAlign="left">
                        <Answer answer={answerData}/>
                    </List>
                </Container>
            </div>
        );
    }
}

export default Result;