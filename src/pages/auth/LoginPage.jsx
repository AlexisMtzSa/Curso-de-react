import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {Formik, Field, Form, ErrorMessage} from 'formik';

const LoginPage = ({logUser}) => {
    
    const navigate = useNavigate()

    const loginSchema = Yup.object().shape({
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')
                .min(5)
    })

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h1>Login Page</h1>
            <Formik initialValues = {initialCredentials}
                    //*** Yup validation schema */
                    validationSchema = {loginSchema}
                    /**onSubmit event */
                    onSubmit = {async (values)=>{
                        if(logUser(values)){
                            await localStorage.setItem('email', values.email)
                            await localStorage.setItem('password', values.password)
                            navigate('/profile')
                        }
                        else
                            alert('Invalid credentials')
                    }}
                >
                
                {({values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur})=>(
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />

                            {
                                errors.email && touched.email &&
                                (
                                    <div className='error'>
                                        <p>{errors.email}</p>
                                    </div>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                            />

                            {
                                errors.password && touched.password &&
                                    (
                                        <div className='error'>
                                            <p>{errors.password}</p>
                                        </div>
                                    )
                            }

                            <button type="submit" className='btn btn-success btn-lg'>Log in</button>
                        </Form>
                    )}
            </Formik>
            <button onClick={()=>navigate('/')} className='btn btn-secondary btn-lg'>Go Home</button>
            <button onClick={()=>navigate('/signin')} className='btn btn-primary btn-lg'>Sign in</button>                
        </div>
    );
}

export default LoginPage;
