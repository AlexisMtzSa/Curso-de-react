import {Observable, } from 'rxjs'

export const getNumbers = new Observable((subscriber) =>{
    subscriber.next(1); //Emits 1
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4); //Emits 4
        subscriber.complete(); //The observable completes & finishes
    }, 1000); //Waits 1 sec
})