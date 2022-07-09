
new Vue({
    el: '#filer_button',
    data:{
        message: "",
        shop: ""
    },
    mounted(){console.log(axios.get("http://localhost:8000"))},
    methods: {
        filter_food: function () {
            this.message = "Еда и питьё"
            // this.shop = "Еда и питьё"
        },
        filter_tools: function () {
            this.message = "Инструменты"
        },
        filter_army: function () {
            this.message = "Оружее, броня и их элементы"
        },
        filter_potion_resept: function () {
            this.message = "Зелья и ингредиенты(Рецепты)"
        },
        filter_potion: function () {
            this.message = "Зелья и ингредиенты(Покупные)"
        },
        filter_potion_ingredients: function () {
            this.message = "Дополнения к зельям"
        },
        filter_all: function () {
            this.message = "Всё"
        },
        // ref_market: function () {
        //     this.shop = "wwww"
        // },
    }
});

// var app3 = new Vue2({
//     el: '#online_market',
//     data:{
//         shop: "qqq"
//     },
//     mounted(){console.log(axios.get("http://localhost:8000"))},
//     methods: {
//         },
// });

// var main_app = new Vue2({

// });