;(function(){
    const val = document.querySelector("#valueDepositWithdraw")
    const btnDeposit = document.querySelector(".deposit")
    const btnWithdraw = document.querySelector(".withdraw")

    const clientInfo = document.querySelector(".bankAccount")

 

    class ClientAccount{
        constructor(clientName, balance){
            this.clientName = clientName
            this.balance = balance
        }
         deposit(value){
            this.balance += value
        }
        withdraw(valueWithdraw){
            this.balance -= valueWithdraw
        }
    }

    const client = new ClientAccount('Emily', 0)

    btnDeposit.addEventListener('click', deposit)
    btnWithdraw.addEventListener('click', withdraw)

    function deposit(){
        if(val.value){
            clientInfo.innerHTML = ''
            client.deposit(+val.value)
            val.value = ''
            genereteClientInfo()
        }
    }

    function withdraw(){
        if(val.value){
            clientInfo.innerHTML = ''
            client.withdraw(val.value)
            val.value = ''
            genereteClientInfo()
        }
    }

    function genereteClientInfo(){
        const pStarter = document.createElement('p')
        const pBalance = document.createElement('p')

        pStarter.textContent = client.clientName
        pBalance.textContent = `Balance: ${client.balance}`

        clientInfo.appendChild(pStarter)
        clientInfo.appendChild(pBalance)
    }
     genereteClientInfo()
})()