// var Connection = require('database-js').Connection;
// const Datastore = require('mysql')
// const database = new Datastore('database.db');
// database.loadDatabase();

new Vue({
    el: '#filer_button',
    data:{
        message: ""
    },
    mounted(){console.log(axios.get("http://localhost:8000"))},
    methods: {
        filter_food: function () {
            this.message = "Еда и питьё"
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
        }
    }
});
// var conn = new Connection("sqlite:///path/to/test.sqlite");
// conn.close()
// 	.then( function() { console.log('Closed.'); } )
// 	.catch( function(reason) { console.log('Error: ' + reason); } );