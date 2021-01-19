import React from 'react';

const Login = () => {
    return (
        <div className={'login'}>
            <form className="form">
                <p className="form-title">Логин</p>
                <div className={'form-el'}>
                    <p className="form-text">Username</p>
                    <input type="text" className="form-input"/>
                </div>
                <div className={'form-el'}>
                    <p className="form-text">Password</p>
                    <input type="text" className="form-input"/>
                </div>
            </form>
        </div>
    );
};

export default Login;