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
      var depositAmount = 0;
      var withdrawalAmount = 0;
      var depositAmount = parseFloat($("#deposit-amount").val());
      var withdrawalAmount = -Math.abs(parseFloat($("#withdrawal").val()));
      var depositOrWithdrawAmount = depositAmount + withdrawalAmount;

      newBankAccount.depositOrWithdrawFunds(depositOrWithdrawAmount);
      $(".currentBalance").last().text(newBankAccount.currentBalance);

      event.preventDefault();
    });
  });
});
