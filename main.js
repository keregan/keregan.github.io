
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
                            temp +="<td>"+u.price+"</td>";
                            temp +="<td>"+u.quantity_in_stock+"</td>";
                            temp +="<td>"+"<input type="+ "number" + "class="+"form-control"+"placeholder="+0+"</input>"+"</td></tr>";
                    }})
                document.getElementById("data-output").innerHTML = temp;
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
