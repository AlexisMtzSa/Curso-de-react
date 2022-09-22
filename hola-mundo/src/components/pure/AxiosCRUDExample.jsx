import React from 'react';
import {login, getAllUsers, getAllPagedUsers, getlUserByID, createUser, updateUser, deletelUser} from '../../services/axiosCRUDService'
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup'

const AxiosCRUDExample = () => {

    const authUser = (values) =>{
        login(values.email, values.password)
            .then(response => {

                if(response.data.token){
                    alert(JSON.stringify(response.data))
                    sessionStorage.setItem('token', response.data.token)
                }
                else{
                    sessionStorage.removeItem('token')
                    throw new Error('Login failure')
                }
            })
            .catch(error => {
                alert('Something went wrong', error)
                sessionStorage.removeItem('token')
            })
            .finally(() => console.log('Login done'))
    }

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


    const obtainAllUsers = () =>{
        getAllUsers()
            .then(response => {
                if(response.status==200 && response.data)
                    alert(JSON.stringify(response.data.data))
            })
            .catch(error => alert('Something went wrong', error))
    }

    const obtainAllPagedUsers = (page) =>{
        getAllPagedUsers(page)
            .then(response => {
                if(response.status==200 && response.data)
                    alert(JSON.stringify(response.data.data))
                else 
                    throw new Error('No users found')
            })
            .catch(error => alert('Something went wrong', error))
    }

    const obtainUserByID = (id) =>{
        getlUserByID(id)
            .then(response => {
                if(response.status==200 && response.data)
                    alert(JSON.stringify(response.data.data))
            })
            .catch(error => alert('Something went wrong', error))
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
        .then(response => {
            if(response.status==201 && response.data)
                alert(JSON.stringify(response.data))
        })
        .catch(error => alert('Something went wrong', error))
    }

    const updateUserByID = (id, name, job) => {
        updateUser(id, name, job)
        .then(response => {
            if(response.status==200 && response.data)
                alert(JSON.stringify(response.data))
        })
        .catch(error => alert('Something went wrong', error))
    }

    const deleteUserByID = (id) =>{
        deletelUser(id)
            .then(response => {
                if(response.status==200)
                    alert('User deleted succesfully')
            })
            .catch(error => alert('Something went wrong', error))
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik initialValues = {initialCredentials}
                    //*** Yup validation schema */
                    validationSchema = {loginSchema}
                    /**onSubmit event */
                    onSubmit = {async (values) =>{
                        authUser(values)
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
                        </Form>
                    )}
            </Formik>
            {/*Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>GetAllUsers</button>
                <button onClick={()=>obtainAllPagedUsers(1)}>GetAllPagedUsers</button>
                <button onClick={()=>obtainUserByID(1)}>GetUserByID</button>
                <button onClick={()=>createNewUser('Alexis', 'Vago')}>CreateUser</button>
                <button onClick={()=>updateUserByID(1, 'Enrique', 'Soldador')}>UpdateUserByID</button>
                <button onClick={()=>deleteUserByID(1)}>DeleteUserByID</button>
            </div>
            
        </div>
        
    );
}

export default AxiosCRUDExample;
