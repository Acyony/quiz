import React, {Component} from "react";
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './Home/home'
import Categories from "./Game/categories";
import Questions from "./Game/questions";
import Result from "./Game/result.jsx";
import Ranking from "./Game/ranking";
import Header from "./Game/header";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="headerStyle" color={'green'}>
                        <Header/>
                        <h1 className="App-title">Quiz Game</h1>
                    </header>

                </div>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/categories" component={Categories}/>
                    <Route path="/questions" component={Questions}/>
                    <Route path="/result" component={Result}/>
                    <Route path="/ranking" component={Ranking}/>
                    <Ranking/>
                </Switch>
            </BrowserRouter>
        )
    };
}

export default App;
