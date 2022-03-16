

//criar conta

const myModal = new Bootstrap.Modal("resgister-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkedlogged()


document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

   const email = document.getElementById("E-mail-create-input").value;
   const senha = document.getElementById("password-create-input").value;
  
   if(email.length < 5){
       alert("Digite um email valido");
    return
   }

   if(senha.length < 4){
       alert("Preencha a senha com no minimo 4 digitos");
       return
   }

   saveAccount({
       login: email,
       senha: senha,
       transactions: []


   })

myModal.hise();

   alert("Conta criada com sucesso");
});

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", "data" );       
    }

    sessionStorage.setItem("logged, data");

}

function checkedlogged(){
    if(session){
        sessionStorage.getItem("logged", session);
        logged = session;
    }

    if(logged){
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}

//logar no sistema

document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("E-mail-input").value;
    const senha = document.getElementById("senha-input").value;
    const session = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account){
        alert("Opps, verifique o usúario ou a senha.")
        return;

        if(account){
            if(account.senha !== senha ){
                alert("Opps, verifique o usúario ou a senha.")
        return;
            }
        }

        saveSession(email, session)

        window.location.href - home.html

    }
})

function getAccount(key){
    const account = localStorage.getItem(key)
    if(account){
        return JSON.parse(account);
    }

    return "";
}

