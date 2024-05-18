import { createContext, useContext, useReducer } from "react";

const contextDataUser=createContext()

const initialState={
    name:"",
    lastName:"",
    photo:"",
    email:"",
}

function reducer(state,action){
    switch (action.type) {
        case "name":
            return {...state,name:action.payload}
        case "lastName":
            return {...state,lastName:action.payload}
        case "email":
            return {...state,email:action.payload}
        case "photo":
            return {...state,photo:action.payload}
        default:
            break;
    }
}


function ContextDataUserProvider({children}) {
    const [{name,lastName,photo,email},dispatch]=useReducer(reducer,initialState)
    return(
        <contextDataUser.Provider value={{
            name,
            lastName,
            photo,
            email,
            dispatch,
        }}>
            {children}
        </contextDataUser.Provider>
    )
}

function useContextDataUser(){
    const context=useContext(contextDataUser)
    return context
}

export {ContextDataUserProvider,useContextDataUser}