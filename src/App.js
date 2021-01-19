import React from 'react'
import './App.css';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./components/Main";

const App = () => {
    return (
        <div className={'container'}>
            <BrowserRouter>
                <Switch>
                    <Route path={'/signUp'}>
                        <SignUp/>
                    </Route>
                    <Route path={'/login'}>
                        <Login/>
                    </Route>
                    <Route path={'/'}>
                        <Main/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
