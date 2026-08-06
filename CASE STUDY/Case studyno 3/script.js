function validateLogin()
{

let username=document.getElementById("username").value.trim();
let password=document.getElementById("password").value;

// Username Validation

if(username=="")
{
alert("Please Enter Username");
return;
}

// Password Validation

if(password=="")
{
alert("Please Enter Password");
return;
}

if(password.length<8)
{
alert("Password must contain at least 8 characters.");
return;
}

let upper=/[A-Z]/;
let lower=/[a-z]/;

if(!upper.test(password))
{
alert("Password must contain at least one Uppercase Letter.");
return;
}

if(!lower.test(password))
{
alert("Password must contain at least one Lowercase Letter.");
return;
}

alert("Login Successful");

document.getElementById("loginSection").style.display="none";
document.getElementById("gradeSection").style.display="block";

}

function calculateGrade()
{

let student=document.getElementById("studentName").value.trim();

let english=Number(document.getElementById("english").value);
let maths=Number(document.getElementById("maths").value);
let science=Number(document.getElementById("science").value);
let computer=Number(document.getElementById("computer").value);
let history=Number(document.getElementById("history").value);

if(student=="")
{
alert("Please Enter Student Name");
return;
}

let subjects=[english,maths,science,computer,history];

for(let i=0;i<subjects.length;i++)
{
if(isNaN(subjects[i]) || subjects[i]<0 || subjects[i]>100)
{
alert("Enter valid marks (0-100) for all subjects.");
return;
}
}

let total=english+maths+science+computer+history;
let percentage=total/5;

let grade="";
let remark="";

if(percentage>=50 && percentage<=65)
{
grade="C";
remark="Good";
}
else if(percentage>=66 && percentage<=80)
{
grade="B";
remark="Very Good";
}
else if(percentage>=81 && percentage<=90)
{
grade="A";
remark="Excellent";
}
else if(percentage>90)
{
grade="A+";
remark="Outstanding";
}
else
{
grade="Fail";
remark="Need Improvement";
}

let status;

if(
english>=35 &&
maths>=35 &&
science>=35 &&
computer>=35 &&
history>=35
)
{
status="<span class='success'>PASS ✅</span>";
}
else
{
status="<span class='fail'>FAIL ❌</span>";
}

document.getElementById("result").style.display="block";

document.getElementById("result").innerHTML=`

<h2 style="text-align:center;color:#1565c0;">Student Report Card</h2>

<hr>

<b>👤 Student Name :</b> ${student}<br><br>

<b>📖 English :</b> ${english}<br>
<b>📘 Mathematics :</b> ${maths}<br>
<b>🧪 Science :</b> ${science}<br>
<b>💻 Computer :</b> ${computer}<br>
<b>📜 History :</b> ${history}<br>

<hr>

<b>📝 Total :</b> ${total} / 500<br>

<b>📊 Percentage :</b> ${percentage.toFixed(2)} %<br>

<b>🏆 Grade :</b> ${grade}<br>

<b>💬 Remark :</b> ${remark}<br>

<b>📌 Result :</b> ${status}

`;

}
