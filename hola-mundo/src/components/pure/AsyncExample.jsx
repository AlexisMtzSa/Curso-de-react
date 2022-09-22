import React from 'react';

const AsyncExample = () => {

    async function generateNumber(){
        return 1
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2)
    }

    function obtainNumber(){
        generateNumber()
            .then((response)=>alert('Response:'+response))
            .catch((error)=> alert('Something went wrong', error))
    }

    function obtainPromisedNumber(){
        generatePromiseNumber()
            .then((response)=>alert('Response:'+response))
            .catch((error)=> alert('Something went wrong', error))
    }

    async function saveSessionStorage(key, value){

        sessionStorage.setItem(key, value)
        return Promise.resolve(sessionStorage.getItem(key))
    }

    async function obtainMessage(){
        
        let promise = new Promise((resolve, reject)=>{
            setTimeout(()=>resolve('Hello world'),2000)
        })

        let message = await promise

        await alert('Message received '+message)

    }

    function showStorage(){
        saveSessionStorage('name','Alexis')
            .then((response)=> alert('Saved name:'+response))
            .catch((error)=> alert('Something went wrong', error))
            .finally(()=>alert('Name saved and retreived successfully'))
    }

    const returnError = async() =>{
        await Promise.reject(new Error('Oooops!'))
    }

    const consumeError = ()=>{
        returnError()
            .then((response)=>alert('Everything is OK: '.response) )
            .catch((error)=> alert('Something went wrong', error))
            .finally(()=>alert('Finally executed'))
    }

    const urlNotFound = async () =>{
        try{
            let response = await fetch('https://invalidURL.com')
            alert('Response '+JSON.stringify(response))
        }
        catch(error){
            alert('Something went wrong with your URL', error)
        }
    }

    const multiplePromises = async () =>{
        let results = await Promise.all([
            fetch('https://regres.in/api/users'),
            fetch('https://regres.in/api/users?page=2')
        ]).catch((error)=> alert('Something went wrong', error))
    }

    return (
        <div>
            <h1>Async, promise examples</h1>
            <button onClick={obtainNumber}>Obtain number</button>
            <button onClick={obtainPromisedNumber}>Obtain promise number</button>
            <button onClick={showStorage}>Save name an show</button>
            <button onClick={obtainMessage}>Send message in 2 seconds</button>
            <button onClick={consumeError}>Obtain error</button>
            <button onClick={urlNotFound}>Request to unknown URL</button>
            <button onClick={multiplePromises}>Multiple promises</button>
        </div>
    );
}

export default AsyncExample;
