import * as type from './type'
import http from 'utils/http'
const actions={
    async homeComing({commit}){
        await http({
            method:'get',
            url:'/data/main.json',
        }).then(res=>{
            let action={
                type:type.HOMECOMING,
                data:res
            }
            commit(action)
        })
        .catch(err=>console.log(err))
    }
}

export default actions