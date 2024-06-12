import { BUY_CHOCHOLATE} from "./ChocholateConstant";

const initialstate = {
    
    numOfchcholate:10
}

const ChocholateReducer = (state = initialstate , action) => {

    switch(action.type) {
        case BUY_CHOCHOLATE : {
            if(state.numOfchocholate <= 0){
                return {
                    ...state , 
                    numOfchocholate:state.numOfchcholate  = 0
                }
            }else{
                return {
                    ...state , 
                    numOfchocholate:state.numOfchcholate - 1   , 
                }
            }
        } 
        default:return state 
    }
}




export default ChocholateReducer