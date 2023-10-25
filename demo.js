
"use strict"

let btn=document.querySelectorAll(".btn");

for(var i=0;i<btn.length;i++)
{
    btn[i].addEventListener("click", function(){
        change(this)
    });   
   
}
console.log(btn)
function change(btnNew)
{
    if(btnNew.innerHTML=="Click me")
    {
        btnNew.innerHTML="clicked"
        btnNew.style.background="red"
    }
    else
    {
        btnNew.innerHTML="Click me"
        btnNew.style.background="green"
    }
}



// let button1=document.getElementById("clickbtn1")
// button1.style.color="white"
// button1.style.background="green"
// button1.addEventListener("click", myFunction);

// function myFunction()
// {
    // if(button1.innerText==="Click me")
//     {
//         button1.innerText="clicked"
//         button1.style.color="white"
//         button1.style.background="red"
//     }
//     else if(button1.innerText==="clicked")
//     {
//         button1.innerText="Click me"
//         button1.style.color="white"
//         button1.style.background="green"
//     }
// }

// let button2=document.getElementById("clickbtn2")
// button2.style.color="white"
// button2.style.background="green"
// button2.addEventListener("click", myFunction2)

// function myFunction2()
// {
//     if(button2.innerText==="Click me")
//     {
//         button2.innerText="clicked"
//         button2.style.color="white"
//         button2.style.background="red"
//     }
//     else if(button2.innerText==="clicked")
//     {
//         button2.innerText="Click me"
//         button2.style.color="white"
//         button2.style.background="green"
//     }
// }

// let button3=document.getElementById("clickbtn3")
// button3.style.color="white"
// button3.style.background="green"
// button3.addEventListener("click", myFunction3);

// function myFunction3()
// {
//     if(button3.innerText==="Click me")
//     {
//         button3.innerText="clicked"
//         button3.style.color="white"
//         button3.style.background="red"
//     }
//     else if(button3.innerText==="clicked")
//     {
//         button3.innerText="Click me"
//         button3.style.color="white"
//         button3.style.background="green"
//     }
// }