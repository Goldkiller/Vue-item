import * as type from './type'

const mutations={
    [type.MIDDLECOMING](state,action){
        state.middleData=action.data 
    }
}

export default mutations