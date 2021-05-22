
import { useContext, useReducer,createContext } from "react"
import {reducer} from './reducer'
const defaultState=[
    {
        id:new Date().getTime(),
        text:"first note",
        date:'12/24/2020'
    },
    {
        id:new Date().getTime(),
        text:"third note",
        date:'12/24/2020'
    },
    {
        id:new Date().getTime(),
        text:"second note",
        date:'12/24/2020'
    }
]

const AppContext=createContext()

const AppContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,defaultState)

    const addNote=(text)=>{
        dispatch({type:'ADD',payload:{text}})
    }
        console.log(state)
    return<AppContext.Provider value={{state,addNote}}>
            {children}
        </AppContext.Provider>
    


}
const useGlobalContext=()=>(useContext(AppContext))
export {useGlobalContext,AppContextProvider}