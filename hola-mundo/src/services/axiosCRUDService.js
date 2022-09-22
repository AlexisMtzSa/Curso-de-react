import axios from 'axios'

/**
 * Login method to ReqRes endpoint
 * @param {string} email 
 * @param {string} password 
 */
export const login = (email, password) =>{

    let body = {
        email: email,
        password: password
    }

    return axios.post('https://reqres.in/api/login', body)
}

export const getAllUsers = () => axios.get('https://reqres.in/api/users')

export const getAllPagedUsers = (page) => axios.get(`https://reqres.in/api/users?page=${page}`)

export const getlUserByID = (id) => axios.get(`https://reqres.in/api/users/${id}`)

export const createUser = (name, job) => {

    let body = {
        name: name,
        job: job
    }

    return axios.post('https://reqres.in/api/users', body)
}

export const updateUser = (id, name, job) => {

    let body = {
        name: name,
        job: job
    }

    return axios.put(`https://reqres.in/api/users/{id}`, body)

}

export const deletelUser = (id) => axios.get(`https://reqres.in/api/users/${id}`)

//TODO Obtain All Users, Obtain users by id, Create User, Update User, DeleteUser