document.querySelector("#btn").addEventListener("click",func);

        function func(){
            var email = document.querySelector("#email").value;
            var password = document.querySelector("#password").value;
            //  localStorage.clear();
            let logInData = JSON.parse(localStorage.getItem("logInData"));
            let notFound = true;
            logInData.forEach(profile => {
                if(profile.email = email ){
                 window.alert("Hello"+" "+profile.firstName);
                 notFound = false;
                 window.location.href = "./index.html"
                }
            });
            if(notFound){
                window.alert("Please create a account");
            }
        }