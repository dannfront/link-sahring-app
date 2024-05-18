import { createContext, useContext, useReducer } from "react";

const authContext=createContext()


const initialState={
    user:{},
    isAuth:false,
}

function reducer(state,action){
    switch (action.type) {
        case "authenticated":
            return {...state,user:action.payload,isAuth:true}
        case "not authenticated":
            return {...state,isAuth:false}
        default:
            return state
    }
}

function AuthContextProvider({children}){
    const [{isAuth,user},dispatch]=useReducer(reducer,initialState)
    return(
        <authContext.Provider value={{
            isAuth,
            user,
            dispatch
        }}>
            {children}
        </authContext.Provider>
    )
}


function useAuthContext() {
    const context=useContext(authContext)
    return context
}

export {AuthContextProvider,useAuthContext}