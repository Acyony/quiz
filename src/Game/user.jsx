import React from 'react';
import {Image, Label, List} from "semantic-ui-react";

function User({picture, name, points}) {
    return (
        <>
            <List.Item>
                <List.Content floated="left">
                    <Label>
                        <Image avatar src={picture}/>
                    </Label>
                    {name}
                </List.Content>
                <List.Content floated="right">
                    {points} points
                </List.Content>
            </List.Item>
        </>
    );
}

export default User;