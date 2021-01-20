import React from 'react';
import {Field, Form, Formik} from "formik";
import {loginThunk} from "../redux/reducer";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {

    const dispatch = useDispatch()



    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Введите email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Неверный email адрес';
        }
        if (!values.password) {
            errors.password = 'Введите пароль'
        }
        return errors
    }

    return (
        <div className={'login'}>
            <Formik
                initialValues={{
                    email: '', password: ''
                }}
                onSubmit={(values) => dispatch(loginThunk(values))}
                validate={validate}>
                {({ errors }) => (
                    <Form className={'form'}>
                        <h1 className="form-title">Логин</h1>
                        <div className="form-el">
                            <label className={'form-text'} htmlFor={'email'}>Адрес электронной почты</label>
                            <Field className={'form-input'} id={'email'} name={'email'}/>
                        </div>
                        {errors.email ? <p className={'error'}>{errors.email}</p> : ''}
                        <div className="form-el">
                            <label className={'form-text'} htmlFor={'password'}>Пароль</label>
                            <Field className={'form-input'} id={'password'} name={'password'}/>
                        </div>
                        {errors.password ? <p className={'error'}>{errors.password}</p> : ''}
                        <button className={'btn'} type={'submit'}>Войти</button>
                    </Form>
                )}
            </Formik>


        </div>
    );
};

export default Login;