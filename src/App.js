import React, {useEffect} from 'react'
import './App.css';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Main from "./components/Main";
import {useDispatch, useSelector} from "react-redux";
import {setAuthAC} from "./redux/reducer";

const App = () => {

    const isAuth = useSelector(state => state.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.access) {
            dispatch(setAuthAC())
        }
    }, [])

    return (
        <div className={'container'}>
            <BrowserRouter>
                <Switch>
                    <Route path={'/signUp'}>
                        {isAuth ? <Redirect to={'/'}/> : <SignUp/>}
                    </Route>
                    <Route path={'/login'}>
                        {isAuth ? <Redirect to={'/'}/> : <Login/>}
                    </Route>
                    <Route path={'/'}>
                        {isAuth ? <Main/> : <Redirect to="/login"/>}
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
