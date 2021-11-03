import React from 'react';
import {Divider, Label, List} from "semantic-ui-react";

function Answer(props) {
    const {id, title, alternative} = props.answer;
    return (
        <>
            <List.Item>
                <List.Content floated="left">
                    <Label>
                        {id}
                    </Label>
                    {title}
                </List.Content>
                <List.Content floated="right">
                    {alternative}
                </List.Content>
            </List.Item>
            <Divider fitted/>
        </>
    );
}

export default Answer;