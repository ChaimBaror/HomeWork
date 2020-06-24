document.onreadystatechange = function(ev){
    if (document.readyState == "complete") {
        console.log('i am ready - ready state');
        bankStart();
    } 
}

function bankStart(){
    console.log('bankStart');

    //document.querySelector('.accounts-list').innerHTML = shukiRender(templates.account, BankDb.Accounts)
    let accountsCustomArray = []
    BankDb.Accounts.forEach(acc => {
        let myClient = BankDb.API.getCliendById(acc.ClientId)
        let o = {
            ID : acc.ID,
            Balance : acc.Balance,
            ClientId : acc.ClientId,
            ClientFullName : myClient.lastName + ' ' + myClient.firstName
        }
        accountsCustomArray.push(o)
    });

    document.querySelector('.accounts-list').innerHTML = rendera(templates.account, accountsCustomArray)

}

/*
class Account {
    ID;     //int
    ClientId;  //client class
    Balance;    //int

    class Client {
    firstName;
    lastName;
    ID;
}
}*/

let templates = {
    account : `<div class="account flex-col">
        <div> <label>ID: </label> <span>[ID]</span> </div>
        <div> <label>ClientFullName: </label> <span>[ClientFullName]</span> </div>
        <div> <label>ClientId: </label> <span>[ClientId]</span> </div>
        <div> <label>Balance: </label> <span>[Balance]</span> </div>
    </div>`
}
