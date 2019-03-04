import * as type from './type'

const mutations={
    [type.RIGHTCOMING](state,action){
        state.rightData=action.data
    }
}

export default mutations 