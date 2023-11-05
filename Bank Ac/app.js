function bankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();

    this.deposit = (amount) => {
        this.balance += amount;
    };

    this.withdraw = (amount) => {
        this.balance -= amount;
    };
}

const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customername = document.querySelector('#customername');
const balanceInput = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const depositAccountNumber = document.querySelector('#depositAccountNumber');

const withdrawForm = document.querySelector('#withdrawForm');
const withdrawAccountNumber = document.querySelector('#withdrawAccountNumber');

const amountDeposit = document.querySelector('#amountDeposit');
const amountWithdraw = document.querySelector('#amountWithdraw');

function updateAccountDetails(account) {
    const accountDetails = document.getElementById('accountDetails');
    accountDetails.innerHTML = `
        <p>Account Number: ${account.accountNumber}</p>
        <p>Customer Name: ${account.customerName}</p>
        <p>Balance: ${account.balance}</p>
    `;
}

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new bankAccount(customername.value, +balanceInput.value);
    accounts.push(account);
    console.log(accounts);
});

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find((account) => account.accountNumber === +depositAccountNumber.value);

    if (account) {
        account.deposit(+amountDeposit.value);
        updateAccountDetails(account); // Update the account details
        console.log(accounts);
    } else {
        console.log('Account not found');
    }
});

withdrawForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find((account) => account.accountNumber === +withdrawAccountNumber.value);

    if (account) {
        account.withdraw(+amountWithdraw.value);
        updateAccountDetails(account); // Update the account details
        console.log(accounts);
    } else {
        console.log('Account not found');
    }
});
