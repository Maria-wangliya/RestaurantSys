import router from '../../router/'
import http from '../../utils/httpClient.js'
export default {
    state: {
        name: 'foodList',
        dataset:[]
    },
    actions: {
        getFoodList: function(store,params){
            store.commit('getFoodList',params);
        }
    },
    mutations: {
        getFoodList: () => {
            http.get({
                url: 'getMenu'
            }).then(res => {
                router.push({name: 'allFoods'})
            })

        }
    }
}