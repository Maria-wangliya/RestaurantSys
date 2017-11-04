import router from '../../../router/'
export default {
    state: {
        name: 'foodList',
        dataset:[]
    },
    actions: {
        getFoodList: function(store,params){
            store.commit('getFoodList',params);
            router.push({name: 'allFoods'});

        }
    },
    mutations: {
        getFoodList: function(params){
            //ajax
        }
    }
}