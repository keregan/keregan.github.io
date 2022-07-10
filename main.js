
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
    }
});

function one_start(filteq){
    console.log(filteq)
    fetch("./market_dnd.json")
        .then(function(response){
            return response.json()
        })
        .then (function (data){
            // console.log(data)
             if (data.length>0){
                var temp = "";
                    data.forEach((u) => {
                        if (u.group==filteq || filteq=='all'){
                            temp +="<tr>";
                            temp +="<td>"+u.name+"</td>";
                            temp +="<td>"+u.group+"</td>";
                            temp +="<td>"+u.price+"</td>";
                            temp +="<td>"+u.quantity_in_stock+"</td>";
                            temp +="<td>"+"<input type="+ "number" + "class="+"form-control"+"placeholder="+0+"</input>"+"</td></tr>";
                    }})
                    document.getElementById("data-output").innerHTML = temp;
             }

            //  let placeholder = document.querySelector("#data-output")
            //  let out = ""
            //  for(let data of data){  
            //      out += "<tr><td>"+data[0].name+"</td></tr>";
            //  }
            //  placeholder.innerHTML = out;
 
            // for(var i=0; i<data.length;i++){
            //     // console.log(JSON.stringify(data))
            //     document.getElementById('name_item').innerHTML = JSON.stringify(data[i].name)
            //     document.getElementById('group_item').innerHTML = JSON.stringify(data[i].group)
            //     document.getElementById('price_item').innerHTML = JSON.stringify(data[i].price)
            //     document.getElementById('quantity_in_stock_item').innerHTML = JSON.stringify(data[i].quantity_in_stock)
            // }
        })
};
