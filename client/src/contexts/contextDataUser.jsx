import { createContext, useContext, useReducer } from "react";

const contextDataUser=createContext()

const initialState={
    name:"",
    lastName:"",
    photo:"",
    email:"",
    selectPhoto:false
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
        case "select photo":
            return {...state,selectPhoto:true}
        case "deselect Photo":
            return {...state,selectPhoto:false}
        default:
            break;
    }
}


function ContextDataUserProvider({children}) {
    const [{name,lastName,photo,email,selectPhoto},dispatch]=useReducer(reducer,initialState)
    return(
        <contextDataUser.Provider value={{
            name,
            lastName,
            photo,
            email,
            selectPhoto,
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