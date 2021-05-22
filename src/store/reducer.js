


export const reducer=(state,action)=>{

    switch(action.type){
        case 'ADD':
            return [
                ...state,
                {
                    id:new Date().getTime(),
                    text:action.payload.text,
                    date:new Date().toLocaleDateString()
                }
            ]
        case 'DELETE':
            return state.filter(note=>note.id!==action.payload) 
            
        case 'SEARCH':           
         let tempState=state.filter(note=>note.text.toLowerCase().includes(action.payload)) 
         
            return  tempState  
        default:
            return state
    }

}