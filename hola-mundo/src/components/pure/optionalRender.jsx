import React, {useState} from 'react';

let red = 0;
let green = 150;
let blue = 100;

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

// Login / Logout buttons
const LoginButton = ({loginAction, propStyle}) => <button style={propStyle} onClick={loginAction}>Login</button>

const LogoutButton = ({logoutAction, propStyle}) => <button style={propStyle} onClick={logoutAction}>Logout</button>

const OptionalRender = () => {

    const [access, setAccess] = useState(true)

    let [nMessages, setNmessages] = useState(0);

    //const updateAccess = () => setAccess(!access)

    const loginAction = () => setAccess(true)

    const logoutAction = () => {
        setAccess(false)
        setNmessages(0)
    }
    
    let optionalButton = access? <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>:
                                <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>

    let addMessages = () => setNmessages(++nMessages)

    return (
        <div>
            {optionalButton}

            {/*Renderiza si la condicion se cumple y el elemnto se puede renderizar*/}
            {access?(<div>
                {nMessages>0? <p>You have {nMessages} new message{nMessages>1?'s':null}</p>:
                            <p>There are no new messages</p>}
                <button onClick={addMessages}>Add new message</button>
            </div>):null}
            
        </div>
    );
}

export default OptionalRender;
