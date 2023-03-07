import userContent from "./user_content.js";
import stockContent from "./stock_content.js";




document.addEventListener("DOMContentLoaded", function() {


const users = JSON.parse(userContent);
const stockDetail = JSON.parse(stockContent)

const details_section = document.getElementsByClassName("StockDetails");

//details_section[0].style.visibility = "visible";

var parent = document.getElementsByTagName("ul");

for (var i = 0; i < users.length; i++) {
    const child = document.createElement("li");
    child.innerHTML = users[i].user.firstname + ",  " + users[i].user.lastname;
    parent[0].appendChild(child);
    child.dataset.id=users[i].id;

    child.addEventListener("click", function() {
        details_section[0].style.visibility = "visible";
        const user_id = this.dataset.id;
        const user = users.find(function(user) {// Finding the corresponding object via id
            return user.id == user_id;
        });



        const portfolio = user.portfolio;
        const portfolio_section = document.getElementsByClassName("test")[0];
        portfolio_section.innerHTML = "";
        for (var i = 0; i < portfolio.length; i++) {
            const stock = portfolio[i];
            const stock_symbol = stock.symbol;
            const stock_owned = stock.owned;


            /* portfolio_section.innerHTML += `<td>${stock_symbol}</td> &nbsp;  `; */
            
            const table = document.querySelector("#listPortfolio");

           // table.innerHTML += `<h3 data-symbl="${stock_symbol}">${stock_symbol}</h3>
             //                   <h3>${stock_owned}<h3>
               //                 <button id="${stock_symbol}" data-symb="${stock_symbol}">View</button>`;
                            




            table.innerHTML += `<h3 data-symbl="${stock_symbol}">${stock_symbol}</h3>
                                <h3>${stock_owned}</h3>
                                <button id="${stock_symbol}" data-symb="${stock_symbol}">View</button>`;
                            
            
            document.getElementById(stock_symbol).addEventListener("click", function(){
                const stock_info = stockDetail.find(function(stock) {// Finding the corresponding stock detail by stock symbol
                    return stock.symbol == stock_symbol;
                });

                /*fetch('./stocks-formatted.json').then(results=>results.json()).then(data=>{
                    const stock = data.find(function(stock) {

                        return stock[i] === stock_symbol;
                    });

                */
                    //console.log(stock_info);
                    //const stock_name = stock.name;
                    
                    
                    var img = document.getElementById("logo")
                    img.src = `./logos/${stock_symbol}.svg`;
                    document.getElementById("stockName").innerHTML=stock_info.name;
                    document.getElementById("stockSector").innerHTML=stock_info.sector;
                    document.getElementById("stockIndustry").innerHTML=stock_info.subIndustry;
                    document.getElementById("stockAddress").innerHTML=stock_info.address;

                
                
            });


            /* portfolio_section.innerHTML += `<td>${stock_owned}</td> &nbsp;  `; */
        }
        document.getElementById("lastname").value = user.user.lastname;
        
        document.getElementById("firstname").value = user.user.firstname;
        
        document.getElementById("email").value = user.user.email;

        document.getElementById("address").value = user.user.address;

        document.getElementById("city").value = user.user.city;

        

    });

    };

});
