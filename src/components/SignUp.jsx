import React from 'react';
import {Formik, Form, Field} from 'formik'
import {signUp} from "../api";

const SignUp = () => {

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Введите email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Неверный email адрес';
        }
        if (!values.password) {
            errors.password = 'Введите пароль'
        } else if (values.password.length < 8) {
            errors.password = 'Длина пароля не менее 8 символов'
        }
        if (!values.name) {
            errors.name = 'Введите имя'
        }
        if (!values.surname) {
            errors.surname = 'Введите фамилию'
        }
        return errors
    }

    return (
        <div className={'signUp'}>
            <Formik
                initialValues={{
                    email: '', password: '', invited_by: 'RU-637164',
                    name: '', surname: '', country_key: 'RU'
                }}
                onSubmit={(values) => signUp()}
                validate={validate}>
                {({errors}) => (
                    <Form className={'form'}>
                        <h1 className="form-title">Регистрация</h1>
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
                        <div className="form-el">
                            <label className={'form-text'} htmlFor={'invited_by'}>Invited by</label>
                            <Field disabled className={'form-input'} id={'invited_by'} name={'invited_by'}/>
                        </div>
                        <div className="form-el">
                            <label className={'form-text'} htmlFor={'name'}>Ваше имя</label>
                            <Field className={'form-input'} id={'name'} name={'name'}/>
                        </div>
                        {errors.name ? <p className={'error'}>{errors.name}</p> : ''}
                        <div className="form-el">
                            <label className={'form-text'} htmlFor={'surname'}>Ваша фамилия</label>
                            <Field className={'form-input'} id={'surname'} name={'surname'}/>
                        </div>
                        {errors.surname ? <p className={'error'}>{errors.surname}</p> : ''}
                        <div className="form-el">
                            <label className={'form-text'} htmlFor={'country_key'}>Ключ страны</label>
                            <Field disabled className={'form-input'} id={'country_key'} name={'country_key'}/>
                        </div>
                        <button className={'btn'} type={'submit'}>Зарегистрироваться</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignUp;