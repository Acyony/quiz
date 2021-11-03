import React from 'react';
import {Grid, Header, Segment} from "semantic-ui-react";

const size = {
    width: 175,
    height: 175
}

function Categories(props) {
    return (
        <div>
            <h2>Categories List</h2>
            <p>Select the category you want answer the questions</p>
            <Grid columns={5} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Segment id="gridBoxStyle" style={size}>
                            <Header as="h2">
                                SPORTS
                                <Header.Subheader>
                                    Icon
                                </Header.Subheader>
                            </Header>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column><Segment id="gridBoxStyle" style={size}>
                        <Header as="h2">
                            SPORTS
                            <Header.Subheader>
                                Icon
                            </Header.Subheader>
                        </Header>
                    </Segment></Grid.Column>
                    <Grid.Column><Segment id="gridBoxStyle" style={size}>
                        <Header as="h2">
                            SPORTS
                            <Header.Subheader>
                                Icon
                            </Header.Subheader>
                        </Header>
                    </Segment></Grid.Column>
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
            </Grid>
        </div>
    );
}

export default Categories;