import * as type from './type'
import http from 'utils/http'
const actions={
    async middleComing({commit}){
            await http({
                method:'get',
                url:'/data/states.json'
            }).then(res=>{
                let action = {
                    type: type.MIDDLECOMING,
                    data: res
                }
                commit(action)
            }) 
            .catch(err=>console.log(err))
        }
}

export default actions