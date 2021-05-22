
import { useContext, useReducer,createContext, useEffect } from "react"
import {reducer} from './reducer'
let defaultState= JSON.parse(localStorage.getItem('notes'))?? []

const AppContext=createContext()

const AppContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,defaultState)

    useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(state))

    },[state])

    const addNote=(text)=>{
        dispatch({type:'ADD',payload:{text}})
    }
  
   const deleteNote=(id)=>{
    dispatch({type:'DELETE',payload:id})
   }
   const search=(text)=>{
       dispatch({type:'SEARCH',payload:text})
   }
    return<AppContext.Provider value={{state,addNote,deleteNote,search}}>
            {children}
        </AppContext.Provider>
    


}
const useGlobalContext=()=>(useContext(AppContext))
export {useGlobalContext,AppContextProvider}