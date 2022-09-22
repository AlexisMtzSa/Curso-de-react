import React from 'react';
import * as Yup from 'yup';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({registerUser}) => {

    const navigate = useNavigate()

    const initialValues ={
        email: '',
        password: '',
        confirm: ''
    }

    const registerSchema = Yup.object().shape({
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')
                .min(5),
        confirm: Yup.string()
                .required('Password confirmation is required')
                .min(5)
                .when('password', {
                    is: value => (value && value.lenght>0 ? true : false),
                    then: Yup.string().oneOf([
                        Yup.ref('password')],
                        'Passwords must match!')
                })
    })


    return (
        <div>
            <h1>Register Page</h1>
            <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit = {(values) =>{
                
                if(!registerUser({email: values.email, password: values.password}))
                    navigate('/')
            }}
            >

                {({values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur})=>(
                        <Form>

                            <label htmlFor="email">Username</label>
                            <Field id="email" type="email" name="email" placeholder="Your email" />

                            {
                                errors.email && touched.email &&
                                (<ErrorMessage name='username' component='div'/>)
                            }

                            <label htmlFor="password">Password</label>
                            <Field id="password" type="password" name="password" placeholder="Your password" />

                            {
                                errors.password && touched.password &&
                                (<ErrorMessage name='password' component='div'/>)
                            }

                            <label htmlFor="confirm">Confirm password</label>
                            <Field id="confirm" name="confirm" placeholder="Confirm password" type="password"/>

                            {
                                errors.confirm && touched.confirm &&
                                (<ErrorMessage name='confirm' component='div'/>)
                            }

                            <button type='submit' className='btn btn-primary btn-lg'>Sign in</button>
                        </Form>

                )}
            </Formik>
            <button onClick={()=>navigate('/')} className='btn btn-secondary btn-lg'>Go Home</button>
            <button onClick={()=>navigate('/login')} className='btn btn-success btn-lg'>Log in</button>
        </div>
    );
}

export default RegisterPage;
