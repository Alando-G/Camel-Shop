const state = {
    stockDetails : [
        {
            itemNumber: 1,
            itemName : "Sweets",
            itemPrice : 5,
            itemQuantity : 0,
            itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
        {
            itemNumber: 27466,
            itemName : "Lollipop",
            itemPrice : 10,
            itemQuantity : 0,
            itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

        }
        ,
        {
            itemNumber: 27466,
            itemName : "Chocolates",
            itemPrice : 50,
            itemQuantity : 0,
            itemImage: '../images/side-view-decorated-chocolate-candy-black-gold-box.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

        }
        ,
        {
            itemNumber: 27466,
            itemName : "Crisps",
            itemPrice : 45,
            itemQuantity : 4,
            itemImage: '../images/27373.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

        }
        ,
        {
            itemNumber: 27466,
            itemName : "Popcorn",
            itemPrice : 20,
            itemQuantity : 4,
            itemImage: '../images/2207.i305.026.S.m005.c13.realistic popcorn poster.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

        }
        ,
        {
            itemNumber: 27466,
            itemName : "Bites",
            itemPrice : 10,
            itemQuantity : 4,
            itemImage: '../images/images.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

        }
        ,
        {
            itemNumber: 27466,
            itemName : "Dried Fruit",
            itemPrice : 15,
            itemQuantity : 4,
            itemImage: '../images/various-dried-fruits-dates-plums-raisins-figs.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

        },
        {
            itemNumber: 27466,
            itemName : "Macaroons",
            itemPrice : 30,
            itemQuantity : 4,
            itemImage: '../images/delicious-macarons-table.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

        },

        {
            itemNumber: 27466,
            itemName : "Chewing gum",
            itemPrice : 10,
            itemQuantity : 4,
            itemImage: '../images/Screenshot 2024-06-24 091001.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

        }
        ,
        {
            itemNumber: 27466,
            itemName : "Fruit Juice",
            itemPrice : 50,
            itemQuantity : 4,
            itemImage: '../images/orange-juice-with-mint-orange-lime-lemon-strawberry-cherry-coconut-grapefruit-goblet-brick-stone-wooden-surface-side-view.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

        }
        
        ],

}
const getters = {
    stock: (state) => state.stockDetails,
}
const actions = {
    
}
const mutations = {
    
}
export default {
    state,
    getters,
    actions,
    mutations,

}