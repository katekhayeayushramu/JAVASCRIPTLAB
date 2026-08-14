// Shopping Cart using Array and objects
// Array of Product objects


let cart = [
    {name: "Book",price: 300, quantity: 2 },
    {name:"Pen", price: 20, quantity: 5 },
    {name:"Bag", price: 500, quantity: 1 }

];
// Calculate total using array method
let total = cart.reduce((sum,item) => {
        return sum + (item.price * item.quantity);

}, 0);
// Apply 10% discount if total is more than 1000
let discount = 0;
if (total > 1000) {
    discount = total * 0.10;
}
else if(total > 500 ){
    discount = total * 0.05;
}
else if(total > 200){
    discount = total * 0.02;
}
else{
    discount = 0;

}
let finalAmount = total - discount;

// Display result
console.log("Total Amount:",total);
console.log("Discount:",discount);
console.log("Final Amount to be paid:",finalAmount);
