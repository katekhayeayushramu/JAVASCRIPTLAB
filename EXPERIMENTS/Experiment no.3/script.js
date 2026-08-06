function calculateGrade() {

let name=document.getElementById("name").value.trim();
let prn = document.getElementById("prn").value.trim();
let english=Number(document.getElementById("english").value);

let maths=Number(document.getElementById("maths").value);

let science=Number(document.getElementById("science").value);

let computer=Number(document.getElementById("computer").value);

let history=Number(document.getElementById("history").value);

// Name Validation

if(name=="")
{
alert("Please enter student name.");
return;
}

// PRN Validation

if(prn=="")
{
alert("Please enter student PRN.");
return;
}

if(!/^\d{11}$/.test(prn))
{
    alert("PRN must contain exactly 11 digits.");
    return;
}


// Marks Validation

let subjects=[english,maths,science,computer,history];

for(let i=0;i<subjects.length;i++)
{
if(isNaN(subjects[i]) || subjects[i]<0 || subjects[i]>100)
{
alert("Enter valid marks (0-100) for all subjects.");
return;
}
}

// Total

let total=english+maths+science+computer+history;

// Percentage

let percentage=total/5;

// Grade

let grade="";

let remark="";

if(percentage>=90)
{
grade="A+";
remark="Outstanding";
}
else if(percentage>=80)
{
grade="A";
remark="Excellent";
}
else if(percentage>=70)
{
grade="B";
remark="Very Good";
}
else if(percentage>=60)
{
grade="C";
remark="Good";
}
else if(percentage>=50)
{
grade="D";
remark="Average";
}
else
{
grade="F";
remark="Fail";
}

// Pass or Fail

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

// Display Result

let result=document.getElementById("result");

result.style.display="block";

result.innerHTML=`

<h2 style="text-align:center;color:#1565c0;">Student Report Card</h2>

<hr>

<b>👤 Student Name :</b> ${name}<br><br>

<b>📖 English :</b> ${english}<br>

<b>📘 Mathematics :</b> ${maths}<br>

<b>🧪 Science :</b> ${science}<br>

<b>💻 Computer :</b> ${computer}<br>

<b>📜 History :</b> ${history}<br>

<hr>

<b>📝 Total Marks :</b> ${total} / 500<br>

<b>📊 Percentage :</b> ${percentage.toFixed(2)} %<br>

<b>🏆 Grade :</b> ${grade}<br>

<b>💬 Remark :</b> ${remark}<br>

<b>📌 Result :</b> ${status}

`;

}
