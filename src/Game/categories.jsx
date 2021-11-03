import React from 'react';
import {Grid} from "semantic-ui-react";
import Category from "./category";



function Categories(props) {
    return (
        <div>
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
        </div>
    );
}

export default Categories;