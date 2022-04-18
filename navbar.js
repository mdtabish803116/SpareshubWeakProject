
    var itemInCart = document.querySelector("#itemInCart");
    var arr = JSON.parse(localStorage.getItem("cartList"));
    console.log(arr);
    itemInCart.innerText = arr.length;

    function brands(){
        var a = document.getElementById("brandBox");
        a.style.display = "flex";
    }

    function brandsLeave(){
        var a = document.getElementById("brandBox");
        a.style.display = "none";
    }

    function categories(){
        var a = document.getElementById("categoriesBox");
        a.style.display = "flex";
    }

    function categoriesLeave(){
        var a = document.getElementById("categoriesBox");
        a.style.display = "none";
    }

    function manufactures(){
        var a = document.getElementById("manufacturesBox");
        a.style.display = "flex";
        a.style.justifyContent = "spaceBetween";
    }

    function manufacturesLeave(){
        var a = document.getElementById("manufacturesBox");
        a.style.display = "none";
    }

    document.getElementById("careers").addEventListener("click" , function(){
                
        window.location.href = "./careers.html";
    })

    document.getElementById("logo").addEventListener("click" , function(){
        window.location.href = "./index.html";
})

document.getElementById("mobLogo").addEventListener("click" , function(){
        window.location.href = "./index.html";
})

    