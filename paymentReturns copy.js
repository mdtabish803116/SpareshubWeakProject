var shippingDiv = document.querySelector("#shippingDiv > div:last-child");
       shippingDiv.style.color = "#0088cc";
       shippingDiv.style.cursor = "pointer";
     shippingDiv.addEventListener("click" , function(){
              window.location.href = "./checkOutReturns.html";
     })

     document.getElementById("paymentForm").addEventListener("submit" , function(event){
          event.preventDefault();

       var name = document.getElementById("name");
       var cardNumber = document.getElementById("cardNumber");
       var cvv = document.getElementById("cvv");
       var mobileNumber = document.getElementById("mobileNumber");

       if(name.value == "" || cardNumber.value == "" || mobileNumber.value == "" || cvv.value == ""){
            alert("please Enter the Details Properly !");
       }else if( cardNumber.value.length != 16){
                alert("Card Number must be of 16 digit !");
       }else {
             alert("payment Successful");
             window.location.href = "#";
       }
       
     })

     // var totalPrice = JSON.parse(localStorage.getItem("TotalPayment"));
     //  if(totalPrice == null){
     //      localStorage.setItem("TotalPayment", JSON.stringify(0));
     //  }

     var cartListArr = JSON.parse(localStorage.getItem("cartList"));

     var totalPrice = localStorage.getItem("totalPrice");
          
    //  var total = 0;
    //    cartListArr.forEach(function(cartItem){
    //          total = total + parseInt(cartItem.price);
    //    })

     //  localStorage.setItem("totalPayment" , total);
  var totalPayment = JSON.parse(localStorage.getItem("totalPayment"));

         var orderTotalText = document.createElement("div");
            orderTotalText.textContent = "Order Total";
     var appendOrderTotal = document.createElement("div");
        appendOrderTotal.textContent = ` ₹ ${totalPrice}.00`
     document.getElementById("orderTotalDiv").append(orderTotalText ,appendOrderTotal);



//   itemsincart functionality

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

     //    functionality for display the shiipping Details

     var userListArr = JSON.parse(localStorage.getItem("userListArr"));
       userListArr.forEach(function(user){
          var nameDiv = document.createElement("div");
             nameDiv.setAttribute("id" , "nameDiv");
          var firstName = document.createElement("div");
                firstName.textContent = user.firstName;  
            var lastName = document.createElement("div");
               lastName.textContent = user.lastName;
          nameDiv.append(firstName , lastName);

          var fullAddressDiv = document.createElement("div");
             fullAddressDiv.setAttribute("id" , "fullAddressDiv");
              var address1 = document.createElement("div");
                   address1.textContent = user.address1;
               var address2 = document.createElement("div");
                   address2.textContent = user.address2;
              var address3 = document.createElement("div");
                   address3.textContent = user.address3;
             fullAddressDiv.append(address1 , address2 , address3);

             var cityStateZipDiv = document.createElement("div");
                cityStateZipDiv.setAttribute("id" , "cityStateZipDiv") 
               var city = document.createElement("div");
                   city.textContent = user.city;
                 var state = document.createElement("div");
                    state.textContent = user.state;
                 var zipCode = document.createElement("div");
                   zipCode.textContent = user.zipCode;
            cityStateZipDiv.append(city , state , zipCode);

             var countryDiv = document.createElement("div");
                 countryDiv.setAttribute("id" , "countryDiv")
                 countryDiv.textContent = user.country;
               
          var mobileNumberDiv = document.createElement("div");
                mobileNumberDiv.setAttribute("id" , "mobileNumberDiv")
              mobileNumberDiv.textContent = user.phoneNumber;

          document.getElementById("shipToContent").append(nameDiv , fullAddressDiv , cityStateZipDiv , countryDiv , mobileNumberDiv );
       })

     //   going to editing in shipping address
       document.getElementById("editShipping").addEventListener("click" , function(){
             // console.log("hii");
              window.location.href = "./checkOutReturns.html";
       })   



