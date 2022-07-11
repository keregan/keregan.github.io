
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
    document.getElementById("user_info").innerHTML = document.cookie;
    if (document.getElementById("user_info").innerHTML != ""){
        user = document.getElementById("user_info").innerHTML
        fetch("./user.json")
        .then(function(response){
            return response.json()
        })
        .then (function (data){
            if (data.length>0){
                data.forEach((u) => {
                    if (u.user_name==document.getElementById("user_info").innerHTML){
                    document.getElementById("user_money").innerHTML = u.user_money;
                   }
               })
            }
        })
    }

    fetch("./market_dnd.json")
    .then(function(response){
        return response.json()
    })
    .then (function (data){
            if (data.length>0){
            var temp = "";
                data.forEach((u) => {
                    if (u.group==filteq || filteq=='all'){
                        temp +="<tr>";
                        temp +="<td>"+u.name+"</td>";
                        temp +="<td>"+u.group+"</td>";
                        temp +="<td><center>-</center></td>";
                        temp +="<td>"+u.price+"</td>";
                        temp +="<td>"+u.quantity_in_stock+"</td>";
                        temp +="<td><input type='number' class='form-control' 'placeholder='0' min='0' max='"+u.quantity_in_stock+"'</input></td>";
                        temp +="<td><button type='button' class='btn btn-secondary btn-lg'>Купить</button></td></tr>";
                }})
            document.getElementById("market_table").innerHTML = temp;
            }
        })
};

function login_password(){
    var user_login = document.getElementById("inputlogin").value;      
    var user_passord = document.getElementById("inputpassword").value;   
    fetch("./user.json")
        .then(function(response){
            return response.json()
        })
        .then (function (data){
             if (data.length>0){
                data.forEach((u) => {
                    if (u.user_name==user_login || u.user_passord==user_passord){
                        document.getElementById("user_info").innerHTML = user_login;
                        document.cookie = user_login;
                        location.reload()
                    }else{
                        alert("Error");
                    }
                })
             }
        })
};

function deletecookie(name) {
    document.cookie = name + "; max-age=0";
    location.reload()
};

function pay_user(){
    if (document.getElementById("user_info").innerHTML == ""){
        alert("Error")
    }else{
        user = document.getElementById("user_info").innerHTML
        user_market = "./market_dnd_"+document.getElementById("user_info").innerHTML+".json"
        fetch(user_market)
        .then(function(response){
            return response.json()
        })
        .then (function (data){
            if (data.length>0){
                var temp = "";
                data.forEach((u) => {
                    temp +="<tr>";
                    temp +="<td>"+u.name+"</td>";
                    temp +="<td>"+u.group+"</td>";
                    temp +="<td>"+u.quantity_in_stock+"</td></tr>";
                })
                document.getElementById("market_user").innerHTML = temp;
            }
        })
    }
};

function user_money(filter){
    var move_money = document.getElementById("move_money").value;     
    if (document.getElementById("user_info").innerHTML != ""){
        user = document.getElementById("user_info").innerHTML
        fetch("pip install Flask./user.json")
        .then(function(response){
            return response.json()
        })
        .then (function (data){
            if (data.length>0){
                data.forEach((u) => {
                    if (u.user_name==document.getElementById("user_info").innerHTML){
                        if(filter=="add"){
                            u.user_money = Number(u.user_money) + Number(move_money)
                        }else{
                            if((Number(u.user_money) - Number(move_money)) < 0){
                                alert("Ты куда?)")
                            }else{
                                u.user_money = Number(u.user_money) - Number(move_money)
                            }
                        }

                            // var a = document.createElement("a");
                            // var file = new Blob([u.user_money], {type: user_money});
                            // a.href = URL.createObjectURL(file);
                            // a.download = 'user.json';
                            // a.click();
                            // download(jsonData, 'json.txt', 'text/plain');
                        
                    document.getElementById("user_money").innerHTML = u.user_money;
                   }
               })
            }
        })
    }
};

function my_storage(){
    if (document.getElementById("user_info").innerHTML == ""){
        alert("Error")
    }else{
        user = document.getElementById("user_info").innerHTML
        user_market = "./market_dnd_"+document.getElementById("user_info").innerHTML+".json"
        fetch(user_market)
        .then(function(response){
            return response.json()
        })
        .then (function (data){
            if (data.length>0){
            var temp = "";
            data.forEach((u) => {
                temp +="<tr>";
                temp +="<td>"+u.name+"</td>";
                temp +="<td>"+u.group+"</td>";
                temp +="<td><center>-</center></td>";
                temp +="<td><center>-</center></td>";
                temp +="<td>"+u.quantity_in_stock+"</td>";
                temp +="<td><input type='number' class='form-control' 'placeholder='0' min='0' max='"+u.quantity_in_stock+"'</input></td>";
                temp +="<td><button type='button' class='btn btn-secondary btn-lg'>Удалить</button></td></tr>";
            })
            document.getElementById("market_table").innerHTML = temp;
            }
        })
    }    
}