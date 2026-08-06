// Vegetable Prices

const rates = {

    Tomato:40,

    Potato:30,

    Onion:35

};

// Automatic Price

document.getElementById("product").addEventListener("change",function(){

document.getElementById("rate").value=rates[this.value];

});

// Default Rate

window.onload=function(){

document.getElementById("rate").value=40;

};

// Calculate Bill

function calculateBill(){

let name=document.getElementById("name").value;

let mobile=document.getElementById("mobile").value;

let invoice=document.getElementById("invoice").value;

let product=document.getElementById("product").value;

let qty=parseFloat(document.getElementById("qty").value);

let rate=parseFloat(document.getElementById("rate").value);

let discount=parseFloat(document.getElementById("discount").value)||0;

let gst=parseFloat(document.getElementById("gst").value)||0;

let packing=parseFloat(document.getElementById("packing").value)||0;

let payment=document.getElementById("payment").value;

let member=document.getElementById("member").value;

// Amount

let amount=qty*rate;

// Discount

let discountAmount=(amount*discount)/100;

let subtotal=amount-discountAmount;

// Membership Discount

if(member=="Yes"){

subtotal=subtotal-(subtotal*5/100);

}

// GST

let gstAmount=(subtotal*gst)/100;

// Final Bill

let finalBill=subtotal+gstAmount+packing;

// Display Invoice

document.getElementById("bill").innerHTML=`

<h2 align="center">Invoice</h2>

<hr>

<p><b>Customer :</b> ${name}</p>

<p><b>Mobile :</b> ${mobile}</p>

<p><b>Invoice No :</b> ${invoice}</p>

<p><b>Product :</b> ${product}</p>

<p><b>Quantity :</b> ${qty} Kg</p>

<p><b>Rate :</b> ₹${rate}</p>

<p><b>Total :</b> ₹${amount.toFixed(2)}</p>

<p><b>Discount :</b> ₹${discountAmount.toFixed(2)}</p>

<p><b>GST :</b> ₹${gstAmount.toFixed(2)}</p>

<p><b>Packing :</b> ₹${packing.toFixed(2)}</p>

<p><b>Payment :</b> ${payment}</p>

<p><b>Membership :</b> ${member}</p>

<hr>

<h2 style="color:green">

Final Bill : ₹${finalBill.toFixed(2)}

</h2>

`;

}   
