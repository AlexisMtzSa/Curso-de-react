import React, {useState} from 'react';
import { getNumbers } from '../../services/observableServices';


const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    console.log('Subscription to Observable')

    const obtainNewNumbers = () =>{
        getNumbers.subscribe({
            next(newNumber){
                console.log('New number', newNumber)
                setNumber(newNumber)
            },
            error(error){
                alert('Something went wrong '+error)
                console.log('Error in observable')
            },
            complete(){
                alert('Finished with ',number)
                console.log('Done with the observable')
            }
        })
    }

    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick={obtainNewNumbers}>Obtain new numbers</button>
        </div>
    );
}

export default ObservableExample;
