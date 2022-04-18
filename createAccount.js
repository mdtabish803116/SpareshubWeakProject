document.querySelector("#btn").addEventListener("click", func);
        let logInData = JSON.parse(localStorage.getItem("logInData")) || [];

        function func(){
            console.log(2)
            var newData = {
             firstName : document.querySelector("#firstName").value,
             lastName : document.querySelector("#lastName").value,
             email : document.querySelector("#email").value,
             password : document.querySelector("#password").value,
             passwordAgain : document.querySelector("#againPassword").value,
            }
            if(newData.firstName = ""){
                window.alert("Enter First Name");
            }
            if(newData.lastName = ""){
                window.alert("Enter Last Name");
            }else{
                console.log(newData.firstName)
                logInData.push(newData);
            // console.log("S")

            localStorage.setItem("logInData", JSON.stringify(logInData));
            document.querySelector("#firstName").value = "";
            document.querySelector("#lastName").value = "";
             document.querySelector("#email").value = "";
             document.querySelector("#password").value = "";
            document.querySelector("#againPassword").value = "";
            window.alert("Account created successfully")
            window.location.href = "./signIn.html"
            }
            
        }