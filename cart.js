var cartList= JSON.parse(localStorage.getItem("cartList"))|| [];


var cartButton = document.getElementById("cart");

var cartBox = document.createElement("div");
   cartBox.setAttribute("id" , "cartBox");

     var flag = true;

   cartButton.addEventListener("click" , function(){
      cartBox.innerText = "";

     var cartList= JSON.parse(localStorage.getItem("cartList"));
        
      if(cartList === null || cartList.length == 0){
        cartBox.append("You have no items in your shoping cart");
        cartBox.style.height = "50px";
        cartBox.style.padding = "30px  0px";
        cartBox.style.fontSize = "20px";
        cartBox.style.textAlign = "center";
      }else {  
          displayCart();

          function displayCart(){  
        var titleDiv = document.createElement("div");
          titleDiv.setAttribute("id" , "titleDiv")
        var cartTotal = document.createElement("div");
                var sum = 0;
            cartList.forEach(function(itemCart){
                  sum = sum + itemCart.price;
            })
              cartTotal.textContent = `Cart Subtotal: ₹ ${sum} `;
        var itemCount = document.createElement("div");

          itemCount.textContent = `${cartList.length} items`;
 
           titleDiv.append(cartTotal , itemCount);
 
           var checkOutDiv = document.createElement("div");
           checkOutDiv.textContent = "GO TO CHECKOUT";
            checkOutDiv.style.cursor = "pointer";
             checkOutDiv.addEventListener("click" , function(){
               window.location.href = "./checkOut.html";
             })

             checkOutDiv.setAttribute("id" , "checkOutDiv");

           cartBox.append(titleDiv , checkOutDiv);
 
           var scrollDiv = document.createElement("div");
           scrollDiv.setAttribute("id" , "scrollDiv");

    cartList.forEach(function(item , index){ 
           
        var imgNamePriceDiv = document.createElement("div"); 
             imgNamePriceDiv.setAttribute("id" , "imgNamePriceDiv")
          var imgDiv = document.createElement("div");
       var img = document.createElement("img");
        img.src = item.image_url; 
        imgDiv.append(img);
        var namePriceDiv =document.createElement("div");
       var name = document.createElement("div");
         name.textContent = item.name;

           priceXDiv = document.createElement("div");
        var price = document.createElement("div");
          price.textContent =  `₹ ${item.price}`;

          removeBtn = document.createElement("div");
          removeBtn.textContent = "✖";

          priceXDiv.append(price , removeBtn);

          removeBtn.addEventListener("click", function(){
              cartList.splice(index , 1);
              localStorage.setItem("cartList" , JSON.stringify(cartList));
                 displayCart()
                 document.getElementById("cart").click();
          })

          namePriceDiv.append(name , priceXDiv);

          imgNamePriceDiv.append(imgDiv , namePriceDiv);

          scrollDiv.append(imgNamePriceDiv)

         
    })
    cartBox.append(scrollDiv);

         var viewCartDiv = document.createElement("div");
             viewCartDiv.setAttribute("id" , "viewCartDiv");
             viewCartDiv.addEventListener("click" , function(){
                 window.location.href = "./view.html";
             })
           viewCartDiv.textContent = "VIEW AND EDIT CART";

           cartBox.append(viewCartDiv)

      }
  }

  
  cartButton.append(cartBox);

    if(flag == false){
     cartBox.style.opacity = 0;
     flag = true;
    }else {  
        cartBox.style.opacity = 1;
        flag = false;
     }
   
     
   })


   
 