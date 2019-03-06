// What will the following code output?

(function() {
    const bankAccount1 = {
        name: 'Tess',
        money: 40,
        deductMoney: function(money) {
            this.money -= money;
            return 'Total money in account: ' + this.money;
        }
    };
    const bankAccount2 = {
        name: 'Tess',
        money: 60
    };
    const withdrawMoney = function(totalMoney) {
        return bankAccount1.deductMoney.bind(bankAccount2, totalMoney);
    };
    console.log(withdrawMoney(5)());
    console.log(withdrawMoney(2)());
}());