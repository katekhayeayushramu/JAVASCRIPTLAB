function calculateBill(){

let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;
let invoice=document.getElementById("invoice").value;
let product=document.getElementById("product").value;

let qty=parseFloat(document.getElementById("qty").value);
let rate=parseFloat(document.getElementById("rate").value);
let discount=parseFloat(document.getElementById("discount").value);
let gst=parseFloat(document.getElementById("gst").value);
let packing=parseFloat(document.getElementById("packing").value);

let payment=document.getElementById("payment").value;
let member=document.getElementById("member").value;

let amount=qty*rate;

let discountAmount=(amount*discount)/100;

let subtotal=amount-discountAmount;

if(member=="Yes"){
subtotal=subtotal-(subtotal*5/100);
}

let gstAmount=(subtotal*gst)/100;

let finalBill=subtotal+gstAmount+packing;

document.getElementById("bill").innerHTML=

`
<h2>Invoice</h2>

<p><b>Customer Name:</b> ${name}</p>

<p><b>Mobile Number:</b> ${mobile}</p>

<p><b>Invoice Number:</b> ${invoice}</p>

<p><b>Product:</b> ${product}</p>

<p><b>Quantity:</b> ${qty} Kg</p>

<p><b>Rate:</b> ₹${rate}</p>

<p><b>Total Amount:</b> ₹${amount.toFixed(2)}</p>

<p><b>Discount:</b> ₹${discountAmount.toFixed(2)}</p>

<p><b>GST:</b> ₹${gstAmount.toFixed(2)}</p>

<p><b>Packing Charges:</b> ₹${packing.toFixed(2)}</p>

<p><b>Payment Mode:</b> ${payment}</p>

<p><b>Membership:</b> ${member}</p>

<hr>

<h2>Final Bill : ₹${finalBill.toFixed(2)}</h2>

`;
  

} 
