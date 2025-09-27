const side_navbar = document.querySelector(".side-navbar")

function showSideNav(){
    side_navbar.style.left = "0"
}

function hideSideNav(){
    side_navbar.style.left = "-60%"
}

const search = document.getElementById("search")
const products_container = document.querySelector(".products")
const product_list = products_container.querySelectorAll("div")

var enteredtext = ""


search.addEventListener("keyup",function(event){
    enteredtext = event.target.value.toLowerCase()

    for(index=0; index<product_list.length; index++){

        var product = product_list[index].querySelector('p').textContent

        if(product.toLowerCase().indexOf(enteredtext) < 0) {
            product_list[index].style.display = 'none'
        }
        else if(product.includes(enteredtext)){
            product_list[index].style.display = 'block'
        }
        else{
            product_list[index].style.display = 'block'
        }
    }
})