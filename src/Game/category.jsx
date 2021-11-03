import React from 'react';
import {Grid, Header, Icon, Segment} from "semantic-ui-react";

const size = {
    width: 175,
    height: 175
}

function Category(props) {
    return (
        <div>
            <Grid.Column>
                <Segment id="gridBoxStyle" style={size}>
                    <Header as="h2">
                        <Header.Subheader>
                            <Icon name={props.icon}/>
                        </Header.Subheader>
                        {props.title}
                    </Header>
                </Segment>
            </Grid.Column>
        </div>
    );
}

export default Category;