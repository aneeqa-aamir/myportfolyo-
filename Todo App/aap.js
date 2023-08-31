var inputTodo = document.getElementById("inputTodo")
var todoList = document.getElementById("todoList")




 function addTodo(){
if(inputTodo.value === ""){
    alert("please enter task")
}
else{
    var todo = document.createElement("li");
    todo.innerHTML = inputTodo.value;

    todo.addEventListener("click", function(){
      todo.classList.toggle("completed");
    })

 var delBtn = document.createElement('span')
 delBtn.innerHTML = "&#10006;"
 delBtn.addEventListener("click", function(){
    todo.remove();
 })

var  addBtn = document.createElement('span')
addBtn.innerHTML = "&#9998"
addBtn.addEventListener("click", function(e){
    e.stopPropagation();
    var addTodo = prompt('add your task here',todo.firstChild.textContent)
    todo.firstChild.textContent = addTodo;
})
 
    todo.appendChild(addBtn)
    todo.appendChild(delBtn)
    todoList.appendChild(todo);
    inputTodo.value = "";
    saveData()
    
}
}
function deleteAll(){
    todoList.innerHTML = "";
    saveData()
}

function saveData(){
  localStorage.setItem("data",todoList.innerHTML)
}

function getTodo(){
   var storage = localStorage.getItem("data")
   todoList.innerHTML=data;
}

getTodo()