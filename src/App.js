import './App.css';
import Home from './Home/home'
import Categories from "./Game/categories";
import Questions from "./Game/questions";
import Result from "./Game/result.jsx";
import Ranking from "./Game/ranking";
import Header from "./Game/header";


function App() {
    return (
        <>
            <div className="App">
                <header className="headerStyle" color={'green'}>
                    <Header/>
                    <h1 className="App-title">Quiz Game</h1>
                </header>
                {/*<Home/>*/}
                {/*<Categories/>*/}
                {/*<Questions/>*/}
                {/*<Result/>*/}
                <Ranking/>
            </div>
        </>
    );
}

export default App;
