import React from 'react'
import './App.css';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Main from "./components/Main";
import {useSelector} from "react-redux";

const App = () => {

    const isAuth = useSelector(state => state.isAuth)



    console.log(isAuth)

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
                        {isAuth ? <Main/> : <Redirect to="/login" />}
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
