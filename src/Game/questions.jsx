import React from 'react';
import {Button, Grid, Radio, Message} from "semantic-ui-react";

function Questions(props) {
    return (<div>
        <h2>Questions about Professions</h2>
        <p>Show us your knowledge!</p>

        <span>
            <h3>Question: What is the profession?</h3>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                       <Message color="yellow">
                          <p> Option 1</p>
                           <Radio toggle/>
                       </Message>
                    </Grid.Column>
                    <Grid.Column>
                         <Message color="teal">
                          <p> Option 2</p>
                           <Radio toggle/>
                       </Message>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                         <Message color="pink">
                          <p> Option 3</p>
                           <Radio toggle/>
                       </Message>
                    </Grid.Column>
                    <Grid.Column>
                         <Message color="brown">
                          <p> Option 4</p>
                           <Radio toggle/>
                       </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
                <Button>Ende</Button>
            </span>
    </div>);
}

export default Questions;