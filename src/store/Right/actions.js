import * as type from './type'
import http from 'utils/http'
const actions={
    async rightComing({commit}){
        await http({
            method:'get',
            url:'/data/coming.json'
        }).then(res=>{
                let action={
                    type:type.RIGHTCOMING,
                    data:res
                }
                commit(action)
            }
        ).catch(err=>{
            console.log(err)
        })
    }
}

export default actions