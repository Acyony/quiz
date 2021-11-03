import React from 'react';
import {Grid, Container} from "semantic-ui-react";
import Category from "./category";



function Categories(props) {
    return (
        <Container textAlign="center">
            <h2>Categories List</h2>
            <p>Select the category you want answer the questions</p>
            <Grid columns={5} divided>
                <Category title="Sport" icon="football ball"/>
                <Category title="Sport" icon="football ball"/>
                <Category title="Sport" icon="football ball"/>
                <Category title="Sport" icon="football ball"/>
                <Category title="Sport" icon="football ball"/>
                <Category title="Sport" icon="football ball"/>

            </Grid>
        </Container>
    );
}

export default Categories;