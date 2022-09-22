import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

const LoginFormik = () => {


    const navigate = useNavigate()

    const loginSchema = Yup.object().shape({
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string().required('Password is required')
    })

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik initialValues = {initialCredentials}
                    //*** Yup validation schema */
                    validationSchema = {loginSchema}
                    /**onSubmit event */
                    onSubmit = {async (values) =>{
                    await new Promise((r)=> setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    /**We save the data in the localstorage */
                    await localStorage.setItem('email', values.email)
                    await localStorage.setItem('password', values.password)
                    navigate('/profile')
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

                            <button type="submit">Submit</button>
                            {isSubmitting? (<p>Login your credentials...</p>):null}
                        </Form>
                    )}
            </Formik>

            
        </div>
        
    );
}

export default LoginFormik;
