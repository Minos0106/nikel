const myModal = new bootstrap.Modal("resgister-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions
}

document.getElementById("button-logout").addEventListener("click", logout)

//adicionar lancçamento

document.getElementById("transaction-form").addEventListener("submit", function(e){
    e.preventDefault()

        const value = parseFloat(document.getElementById("value-input").value);
        const description = document.getElementById("description-input").value;
        const date = document.getElementById("date-input").value;
        const type = document.querySelector('input["name=" type-input"]:checked');

        data.transactions.unshifit({
            value: value, type: type, description: description, date: date
        });    

        saveDate(data);
        e.target.reset();
        myModal.hide()

        getCashIn();
        getCashOut();
        getTotal();

        alert("Lançamento adcionando com sucesso!")
});

checkedlogged();

function checkedlogged(){
    if(session){
        sessionStorage.getItem("logged", session);
        logged = session;
    }

    if(logged){ 
        window.location.href = "index.html";
        return
    }

    const dataUser = localStorage.getItem(logged);
    if(dataUser){
        data = JSON.parse(dataUser)
    }

    function logout(){
        sessionStorage.removeItem("logged");
        localStorage.removeItem("session");

        window.location.href = "index.html";
    }

}

function getCashIn(){
    const transactions = data.transactions;

    const cashIn = transactions.filter((iten) => iten.type == "1");

    if(length){
        let cashInHtml = ``; 
        let limit = 0; 
        if(cashIn.length > 5){
            limit = 5;
        } else{
            limit = cashIn.length;
        }

        for (let index = 0; index < limit; index++) {
           cashIn`
           <div class="row mb-4">
           <div class="col-12">
               <h3 class="fs-2">${cashIn[index].value.toFixed(2)}</h3>
               <div class="container p-0"></div>
               <div class="row">
                   <div class="col-12 col-md-8">
                    <p>${cashIn[index].description}</p>
                    <div class="col-12 col-md-3 d-flex justify-content-end"></div>
                    ${cashIn[index].date}
                   </div>
               </div>
           </div>
       </div>
           `            
        }

        document.getElementById("cash-in-list").innerHTML = cashInHtml;
    }    
}

function getCashOut(){
    const transactions = data.transactions;

    const cashIn = transactions.filter((iten) => iten.type == "2");

    if(length){
        let cashInHtml = ``; 
        let limit = 0; 
        if(cashIn.length > 5){
            limit = 5;
        } else{
            limit = cashIn.length;
        }

        for (let index = 0; index < limit; index++) {
           cashIn`
           <div class="row mb-4">
           <div class="col-12">
               <h3 class="fs-2">${cashIn[index].value.toFixed(2)}</h3>
               <div class="container p-0"></div>
               <div class="row">
                   <div class="col-12 col-md-8">
                    <p>${cashIn[index].description}</p>
                    <div class="col-12 col-md-3 d-flex justify-content-end"></div>
                    ${cashIn[index].date}
                   </div>
               </div>
           </div>
       </div>
           `            
        }

        document.getElementById("cash-out-list").innerHTML = cashInHtml;
    }    
}

    document.getElementById("total").innerHTML = `R$ ${totaltoFixed(2)}`

    function getTotal() {
        const transactions = data.transactions
        let total = 0
      
        transactions.forEach(item => {
          if (item.type === '1') {
            total += item.value
          } else {
            total -= item.value
          }
        })
      
        document.getElementById('total').innerHTML = `R$ ${total.toFixed(2)}`
      }


function saveDate(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}