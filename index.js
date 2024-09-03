//state and props
// state defined object in js
let todos = [];
let id = 0;
const currentIndex = 0;

function addTodo() {
  
  const inputVal = document.querySelector("input").value;
  if(inputVal.trim()!=='')
  {
  todos.push({
    id: id,
    title: inputVal,
    status: "InProgress",
  });
  localStorage.setItem("arr", JSON.stringify(todos));
  console.log("localStoragte"+localStorage.getItem("arr"));
  render(todos);
  todos=[];

 }else{
    alert('Please fill the value');
 }
}

function render(todos) {
  
  let value = 0;
  if(localStorage.getItem("arr")==null)
  {
     
  }
  for (let idx = 0; idx < todos.length; idx++) {
    if(todos[idx].status==="InProgress")
    {
        value++;
    }

   const divEl =  document.createElement("div");
   const spanEl = document.createElement("span");
   const childSpanEl = document.createElement("span");
   const editBtnEl = document.createElement("Button");
   const deleteBtnEl = document.createElement("Button");

   spanEl.innerHTML = todos[idx].title;   
   spanEl.setAttribute('data-id', id);

   childSpanEl.innerHTML = "<br>" + new Date() + "<br>";
   childSpanEl.setAttribute("span-data-id",id);

   spanEl.className='span-class';
   childSpanEl.className='span-class';
   editBtnEl.innerHTML = 'Edit';
   editBtnEl.setAttribute('data-id', id);
   editBtnEl.setAttribute('onclick', 'editBtnFn('+id+')');
   deleteBtnEl.innerHTML='Delete';
   deleteBtnEl.setAttribute('data-id', id);
   deleteBtnEl.setAttribute('onclick', 'delBtnFn('+id+')');

   divEl.setAttribute('data-id', id);
   divEl.appendChild(spanEl);
   divEl.appendChild(childSpanEl);
   divEl.appendChild(editBtnEl);
   divEl.appendChild(deleteBtnEl);
  
   document.getElementById("view-list").appendChild(divEl);
  }
  document.querySelector("h3").innerHTML = value + "/" + todos.length;
  id++;

  /**clear the input value */
  let inputVal = document.querySelector("input").value;
  inputVal = "";
  
}

function editBtnFn(id){
 console.log('edit'+id);
 const spanElement = document.querySelector(`span[data-id="${id}"]`);
 const spanDateElement = document.querySelector(`span[span-data-id="${id}"]`);
 let dateContent = spanDateElement.textContent;
 let textContent = spanElement.textContent;
 
 const value = prompt('Edit you task', textContent);
  
 if(value!=null)
 {
   spanElement.textContent = value;
   spanDateElement.innerHTML =`<br>${new Date()}<br>`;
   spanDateElement.appendChild(document.createElement("br"));
 }
 // edit

}

function delBtnFn(id){

  console.log('del'+id);
  const divElement = document.querySelector(`div[data-id="${id}"]`);
  divElement.remove();

}
