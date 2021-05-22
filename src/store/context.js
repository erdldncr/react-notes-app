
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
    
    return<AppContext.Provider value={{state}}>
            {children}
        </AppContext.Provider>
    


}
const useGlobalContext=()=>(useContext(AppContext))
export {useGlobalContext,AppContextProvider}