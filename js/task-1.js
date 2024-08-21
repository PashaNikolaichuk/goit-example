function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  const message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;

  return message;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
// }

// makeTransaction(3, 1000);

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
// }

// makeTransaction(10, 500);
