import * as type from './type'

const mutations={
    [type.HOMECOMING](state,action){
        state.homeData=action.data
    }
}

export default mutations 