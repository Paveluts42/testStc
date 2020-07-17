import React from "react";

import '../style/App.css';
import Navbar from "./navbar/Navbar";
import Task1 from "./task1/Task1";
import {Route, Switch} from "react-router-dom";
import Task2 from "./task2/Task2";

const App = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Task1/>
                    </Route>
                    <Route path="/task2">
                        <Task2/>
                    </Route>
                </Switch>
            </main>

        </>
    );

}

export default App;
