// var userListArr = JSON.parse(localStorage.getItem("userListArr"));
//  if(userListArr === null){
//      localStorage.setItem("userListArr",JSON.stringify([]));
//  }
var userListArr = [];
document.getElementById("shippingForm").addEventListener("submit" , function(e){
       e.preventDefault();
    //   var userListArr = JSON.parse(localStorage.getItem("userListArr"));

      var lastName = document.getElementById("lastName").value;
     var  address1 = document.getElementById("streetAddress1").value;
     var city = document.getElementById("city").value;
      var state = document.getElementById("state").value;
     var zipCode = document.getElementById("zipCode").value;
     var country = document.getElementById("country").value;
     var  phoneNumber = document.getElementById("phoneNumber").value;

     if(lastName == "" || address1 == "" || city == "" || state == "" || zipCode == "" || country == "" || phoneNumber == ""){
           alert("Please fill the details Properly !");
     }else {  

      
      var userObj = {
            firstName : document.getElementById("firstName").value,
           lastName : document.getElementById("lastName").value,
           address1 : document.getElementById("streetAddress1").value,
           address2 : document.getElementById("streetAddress2").value,
           address3 : document.getElementById("streetAddress3").value,
           city : document.getElementById("city").value,
           state : document.getElementById("state").value,
           zipCode : document.getElementById("zipCode").value,
           country : document.getElementById("country").value,
           phoneNumber : document.getElementById("phoneNumber").value,
      }

      userListArr.push(userObj);
      localStorage.setItem("userListArr" , JSON.stringify(userListArr));

      window.location.href = "./paymentReturns.html"
     }
})

 var cartListArr = JSON.parse(localStorage.getItem("cartList"));

     var itemsInCart = document.getElementById("itemsInCart");
        var itemsNumberDiv = document.createElement("div");
           itemsNumberDiv.textContent = `${cartListArr.length} Items in Cart`;
        var downArrowDiv = document.createElement("div");
           downArrowDiv.textContent = "˅";
           itemsInCart.append(itemsNumberDiv , downArrowDiv);

            var flag = true; 
           downArrowDiv.addEventListener("click" , function(){
            downArrowDiv.textContent = "˄";
            document.getElementById("appendShoppingItem").innerText = "";
                   cartListArr.forEach(function(cartItem){
                    var shoppingItemDiv = document.createElement("div");
                       shoppingItemDiv.setAttribute("id" , "shoppingItemDiv"); 
                    var imgDiv = document.createElement("div");
                      var img = document.createElement("img");
                         img.src = cartItem.image_url;
                         imgDiv.append(img);
                     var name = document.createElement("div");
                        name.textContent = cartItem.name;
                      var price = document.createElement("div");
                        price.textContent = `₹ ${cartItem.price}.00`;

                        shoppingItemDiv.append(imgDiv , name , price);

                  var hrTag = document.createElement("hr");

                        document.getElementById("appendShoppingItem").append(shoppingItemDiv , hrTag);
 

                   })


                   if(flag == true){
                    document.getElementById("appendShoppingItem").style.opacity = 1;
                    flag = false;
                   }else {
                    document.getElementById("appendShoppingItem").style.opacity = 0;
                    flag = true;
                    downArrowDiv.textContent = "˅";
                   }
            
                
           })