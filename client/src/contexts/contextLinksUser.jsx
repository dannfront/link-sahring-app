import { createContext, useContext, useReducer } from "react";

const linksContext=createContext()

const initialState={
    links:[]
}

function reducer(state,action){
    switch (action.type) {
        case "link/add":
            return{...state,links:[...state.links,{value:null}]}
        case "link/remove":
            return{...state,links:state.links.filter((_,index)=>index!==action.payload)}
        case "link/update":
            return{...state,links:state.links.map((link,i)=>action.payload.index===i?action.payload.properties:link)}
        case "link/Bd":
            return {...state,links:[...action.payload]}
        
        default:
            return state
    }
}


function LinksContextProvider({children}){
    const [{links},dispatch]=useReducer(reducer,initialState)

    return <linksContext.Provider value={{
        links,
        dispatch
    }}>
        {children}
    </linksContext.Provider>
}


function useLinksContext(){
    const context=useContext(linksContext)
    return context
}

export {LinksContextProvider,useLinksContext}