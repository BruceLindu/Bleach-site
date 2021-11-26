var counter = 0;
function alterarImg(){
    if (counter%2 == 0){
        document.getElementById("img1").src = "https://www.torredevigilancia.com/wp-content/uploads/2016/08/imagens-imagens-bleach-26.jpg";
        document.getElementById("img2").src = "https://2.bp.blogspot.com/-jXdAIJcJz-4/XEecnR1k7dI/AAAAAAAAHLI/79ImkQaGYdIGqcM_-GLYqmyfwbGYm4w3QCLcBGAs/s1600/Los%2Bespada.jpeg";
        document.getElementById("img3").src = "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/05/Bleach-10-Transformations-of-Ichigo.png?q=50&fit=crop&w=960&h=500&dpr=1.5";
    }
    else{
        document.getElementById("img1").src = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/09/Bleach-Feature-1.jpg";
        document.getElementById("img2").src = "https://i.pinimg.com/originals/d6/ff/89/d6ff89e2f016673239ac2f7f0c5e168b.jpg";
        document.getElementById("img3").src = "https://c4.wallpaperflare.com/wallpaper/12/451/630/bleach-kurosaki-ichigo-final-getsuga-tenshou-mugetsu-1600x1200-anime-bleach-hd-art-wallpaper-preview.jpg";
        
    }

    counter++;
 
}

function login(){
    window.location.replace("register.html")
}

function site(){
    window.location.replace("index.html")
}

function register(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var password1  = document.getElementById("psw-repeat").value;
    var ola = 0;
    if (email == "" , password == ""){
        alert("please insert your email/password")
      
    }else{
        if(password == password1){           
            alert("U have registered");
            localStorage.setItem("conta",email +"|" + password);
            window.location.replace("login.html")
            ola = 1
        }
        if (ola == 0){
            alert("Insert correctly the password");
        }
    }
    
}
function loginFunction(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;

    var conta = localStorage.getItem("conta").split("|");

    if (conta[0] == email && conta[1] == password){
        alert("Iniciou sessão com sucesso!");
        window.location.replace("index.html")
    }
    else{
        alert("erro");
    }
    
}

function setName(){
    var name = localStorage.getItem("conta").split("|")[0];
    if (name != undefined){
        document.getElementById("name").innerText = name;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    setName();
});