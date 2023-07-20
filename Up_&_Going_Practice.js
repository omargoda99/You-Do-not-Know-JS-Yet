const tax_rate = 0.08;
const spending = 200;
const phone_price = 300;
const accessory_price = 50;
var bank_balance = 1000;
var amount = 0;

function CalcTax(amount) {
  return amount * tax_rate;
}
function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}
while (amount < bank_balance) {
  amount += phone_price;
  if (amount < spending) {
    amount += accessory_price;
  }
}
amount += CalcTax(amount);
console.log("Your purchase:" + formatAmount(amount));
if (amount > bank_balance) {
  console.log("You can't buy the product");
}
