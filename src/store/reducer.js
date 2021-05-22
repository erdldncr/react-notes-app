


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
        default:
            return state
    }

}