


export const reducer=(state,action)=>{

    switch(action.type){
        case 'ADD':
            return [
                ...state,
                {
                    id:new Date().getTime(),
                    text:action.payload.text,
                    date:'10/20/30'
                }
            ]
        default:
            return state
    }

}