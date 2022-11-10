const Data = (state = [], action) => {

    if(action.type==="newData"){
     return [
         ...state=action.payload.data
     ]
    }else{
        return state
    } 

}

export default Data;