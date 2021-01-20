import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserDataThunk} from "../redux/reducer";

const Main = () => {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.userData)

    console.log(userData)

    useEffect(()=> {
        dispatch(getUserDataThunk())
    },[])

    return (
        <div className={'main'}>
            <img className={'img'} src={userData.avatar} alt="avatar"/>
            <p>{userData.name}</p>
            <p>{userData.surname}</p>
            <p>{userData.client_id}</p>
            <p>{userData.email}</p>
            <p>{userData.username}</p>
            <p>{userData.uid}</p>
        </div>
    );
};

export default Main;