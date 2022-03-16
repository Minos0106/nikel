
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions
}

document.getElementById("button-logout").addEventListener("click", logout)

function logout(){
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";

}

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

        alert("Lançamento adcionando com sucesso!")
});

getElementById();
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

    getTransactions();

}

function saveDate(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}

function  getTransactions(){
    const transactions = data.transactions
    let transactionsHtml = ``;

    if(transactions.length){
        transactions.forEach((item) => {
            let type = entrada

            if((item.type === "2"){
                type = "siada";
            }
            transactions += `
            <tr>
            <th scope="row">${item.date}</th>
            <td>${item.value.toFixed(2)}</td>
            <td>${type}</td>
            <td>${item.description}</td>
          </tr>
            `
        }
    }
    document.getElementById("transactions-list").innerHTML = transactionsHtml
}