let btn = document.querySelector("#btn")
let parent = document.querySelector(".todo-list");
let input = document.querySelector("#input");

btn.addEventListener("click", myFunction)
function myFunction() {
if(input.value==" "){
    alert("Enter something")
}
else
{
 let value=document.createElement("div")
    value.setAttribute
    let list = document.createElement("li")
    list.setAttribute
    list.innerText = input.value;
   
    let delbtn = document.createElement("button")
    delbtn.innerText="del"
      delbtn.addEventListener("click",del)
      function del(){
        delbtn.parentElement.remove()
      }
    value.append(list)
    value.append(delbtn)
    parent.append(value)

    input.value = " "

    }

    let clearbtn=document.getElementById("clear")
    clearbtn.addEventListener("click", clearFunction);

function clearFunction() {
  clearbtn.parentElement.remove()
  parent.append(clearbtn)
}

}

