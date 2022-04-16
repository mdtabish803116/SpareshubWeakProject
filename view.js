
var total = 0;

var cartList = JSON.parse(localStorage.getItem("cartList"));
console.log(cartList);

displayCartItem();

  //    var storage = true;
  //  var totalPrice1 = JSON.parse(localStorage.getItem("totalPrice"));
  //   var totalPrice2 = JSON.parse(localStorage.getItem("DiscountTotalPrice"));
  //       localStorage.setItem("DiscountTotalPrice" , JSON.stringify(totalPrice1));
    
  //       document.getElementById("applyBtn").addEventListener("click", function(){

  //              if(storage == true){  
  //                       totalPrice2 = totalPrice2 - totalPrice2*0.3;
  //             localStorage.setItem("DiscountTotalPrice" , JSON.stringify(parseInt(totalPrice2)));
  //              }

  //              storage = false;
  //       })
    



function displayCartItem(){
    
   cartList.forEach(function(cartItem , index){
       var shoppingItem = document.createElement("div");
           shoppingItem.setAttribute("id" , "shoppingItem")
        var imageNameDiv = document.createElement("div");
             imageNameDiv.setAttribute("id" , "imgNameDiv")
         var img = document.createElement("img");
           img.src = cartItem.image_url;
          var name = document.createElement("div");
            name.textContent = cartItem.name;
            imageNameDiv.append(img , name)
          var price = document.createElement("div");
            price.textContent = ` ₹ ${cartItem.price}.00`;
          var qtyDiv = document.createElement("div")
             qtyDiv.setAttribute("id" , "qtyDiv");
                       var countDiv = document.createElement("div");
                          countDiv.textContent = "1";
                        var arrowsDiv = document.createElement("div");
                            arrowsDiv.setAttribute("id" , "arrowsDiv")
                         var upArrow = document.createElement("div");
                           upArrow.textContent = "˄"
                         var downArrow = document.createElement("div");
                           downArrow.textContent = "˅"

                           var imgCount ;
                           if(localStorage.getItem(`imgCount${cartItem.id}`) === null){
                               countDiv.textContent = "1";
                               imgCount = 1;
                           }else {  
                                countDiv.textContent = localStorage.getItem(`imgCount${cartItem.id}`)
                               imgCount = JSON.parse(localStorage.getItem(`imgCount${cartItem.id}`));
                           }

                           upArrow.addEventListener("click" , function(){
                                 imgCount++;
                                 localStorage.setItem(`imgCount${cartItem.id}` , imgCount)
                                 countDiv.textContent = localStorage.getItem(`imgCount${cartItem.id}`);
                                      
                            
                                 subTotal.textContent = `₹ ${cartItem.price*imgCount}.00`;
            
                                 localStorage.setItem(`itemPrice${cartItem.id}` ,  subTotal.textContent)
            
                                 subTotal.textContent = localStorage.getItem(`itemPrice${cartItem.id}`);
            
                                 window.location.reload();
                           })
        
                           downArrow.addEventListener("click" , function(){
                            // console.log("hii")
                         if(imgCount <= 1){
                           countDiv.textContent = "1";
                           
                         }else{  
                          imgCount--;
                          localStorage.setItem(`imgCount${cartItem.id}` , imgCount);
       
                       countDiv.textContent = localStorage.getItem(`imgCount${cartItem.id}`);
       
                       subTotal.textContent = `₹ ${cartItem.price*imgCount}.00`;
       
                       localStorage.setItem(`itemPrice${cartItem.id}` ,  subTotal.textContent)
       
                       subTotal.textContent = localStorage.getItem(`itemPrice${cartItem.id}`);
       
                         window.location.reload();
       
                         }
                      });

                         arrowsDiv.append(upArrow , downArrow);
              qtyDiv.append(countDiv , arrowsDiv);


         var subTotal = document.createElement("div");
           subTotal.textContent = ` ₹ ${cartItem.price}.00`;

           shoppingItem.append(imageNameDiv, price , qtyDiv , subTotal);

           var editXDiv = document.createElement("div");
               editXDiv.setAttribute("id" , "editXDiv");
              var editPen = document.createElement("div");
                  editPen.textContent = "🖍";
                var removeBtn = document.createElement("div");
                   removeBtn.textContent = "✖";

                   removeBtn.addEventListener("click", function(){
                            cartList.splice(index , 1);
                          localStorage.setItem("cartList" , JSON.stringify(cartList));
                          window.location.reload();
                   })
            editXDiv.append(editPen , removeBtn);


            if(localStorage.getItem(`itemPrice${cartItem.id}`) === null){
             subTotal.textContent = ` ₹ ${cartItem.price}.00`;
              total = total + parseInt(subTotal.textContent.slice(2));
              localStorage.setItem("totalPrice",JSON.stringify(total));
           }else {  
         subTotal.textContent = localStorage.getItem(`itemPrice${cartItem.id}`);
         total = total + parseInt(subTotal.textContent.slice(2));
         localStorage.setItem("totalPrice",JSON.stringify(total));
           }

           var horizontalLine = document.createElement("hr")

           document.getElementById("appendShoppingItem").append(shoppingItem , editXDiv , horizontalLine);
           
      })
          
     // var totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
        var subTotalFirstDiv = document.createElement("div");
             subTotalFirstDiv.textContent = "Subtotal"
            subTotalSecondDiv = document.createElement("div");
               subTotalSecondDiv.setAttribute("id" , "subTotalSecondDiv")
              subTotalSecondDiv.textContent = `₹ ${total}.00`;

              var orderTotalFirstDiv = document.createElement("div");
              orderTotalFirstDiv.textContent = "Order Total"
             orderTotalSecondDiv = document.createElement("div");
                orderTotalSecondDiv.setAttribute("id" , "orderTotalSecondDiv");
               orderTotalSecondDiv.textContent = `₹ ${total}.00`;
          
      document.getElementById("subTotalDiv").append( subTotalFirstDiv, subTotalSecondDiv);
      document.getElementById("orderTotalDiv").append(orderTotalFirstDiv ,orderTotalSecondDiv);

      // apply coupon functionality

      var flag = true;
      document.getElementById("applyBtn").addEventListener("click", function(){
          var inputCpnVal = document.querySelector("#inputCpn").value;
          var subTotalVal = document.getElementById("subTotalSecondDiv");
          var orderTotalVal = document.getElementById("orderTotalSecondDiv");
             if(flag){  
          if(inputCpnVal == "masai30"){
              total = parseInt(total - total*(0.3));

             // console.log(total);
              alert("Coupon applied succesfully");

              flag = false;
          }else {
              alert("Coupon is not Valid !")
          }

          subTotalVal.textContent = `₹ ${total}.00`;
          orderTotalVal.textContent = `₹ ${total}.00`;

        }else{
            alert("You have already applied the coupon !");
        }
      })
       
} 