let btn = document.querySelector("#btn")
let parent = document.querySelector(".todo-list");
let input = document.querySelector("#input");
let edit_restore=null

btn.addEventListener("click", myFunction)
function myFunction() {
if(input.value==" ")
{
    alert("Enter something")
}
else
{
  if(edit_restore==null)
  {
 let value=document.createElement("div")
 value.id="subdiv"
  
    let list = document.createElement("li")
    
    list.innerText = input.value;
   let editbtn = document.createElement("button")
   editbtn.innerText="edit"
   editbtn.id="editbtn"

   editbtn.addEventListener("click",function(){
    editFunction(this);
   })


    let delbtn = document.createElement("button")
    delbtn.innerText="del"
      delbtn.addEventListener("click",del)
      function del(){
        delbtn.parentElement.remove()
      }
    
    value.append(list)
    value.append(editbtn)
    value.append(delbtn)
    parent.append(value)

    input.value = " "
    }
    else
    {
      updateFunction()
    }

    function editFunction(element)
    {
      console.log(element.parentElement.childNodes)
      edit_restore = element.parentElement.childNodes; 
      input.value=edit_restore[0].innerHTML;
    }

    function updateFunction()
    {
      edit_restore[0].innerHTML = input.value;
      input.value=""
      edit_restore=null
    }
    }

    let clearbtn=document.getElementById("clear")
    clearbtn.addEventListener("click", clearFunction);

function clearFunction() {
  clearbtn.parentElement.remove()
  parent.append(clearbtn)
}

}

