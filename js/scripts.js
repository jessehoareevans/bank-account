function BankAccount(name, currentBalance) {
  this.name = name;
  this.currentBalance = currentBalance;
}

BankAccount.prototype.depositOrWithdrawFunds = function(depositOrWithdrawAmount) {
  this.currentBalance += depositOrWithdrawAmount;
}

$(document).ready(function() {
  $("#Initial-amount").submit(function(event) {
    var inputtedName = $("#name").val();
    var inputtedInitialDeposit = parseFloat($("#initial-deposit").val());

    var newBankAccount = new BankAccount(inputtedName, inputtedInitialDeposit);

    $(".currentBalance").text(newBankAccount.currentBalance);

    event.preventDefault();

    $("#withdrawalOrDepositAmount").submit(function(event) {
      var inputtedDepositAmount = parseFloat($("#deposit-amount").val());
      var inputtedWithdrawalAmount = -Math.abs(parseFloat($("#withdrawal").val()));
      if (isNaN(inputtedDepositAmount)) {
        inputtedDepositAmount = 0;
      } else if (isNaN(inputtedWithdrawalAmount)) {
        inputtedWithdrawalAmount =0;
      }
      var depositOrWithdrawAmount = inputtedDepositAmount + inputtedWithdrawalAmount;

      newBankAccount.depositOrWithdrawFunds(depositOrWithdrawAmount);
      $(".currentBalance").last().text(newBankAccount.currentBalance);

      event.preventDefault();
    });
  });
});
