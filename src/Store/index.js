import Vuex from 'vuex'
import products from './Modules/products';
import Cart from './Modules/cart';

export default new Vuex.Store({
    state : {},
    getters: {},
    actions : {},
    mutations : {},
    modules :{
        products,
        Cart

    },
})