function addItem(){
  const input=document.getElementById('input');
  const item=input.value;
  
  if (item ===""){
    alert("請輸入事項");
    return;
  }
  
  const ul=document.getElementById('list');
  const newItem=document.createElement('li');
  newItem.classList.add('item');
  newItem.textContent=item;

  newItem.onclick=checkItem;
  
  const deleteBtn=document.createElement('span');
  deleteBtn.classList.add('delete');
  deleteBtn.onclick = deleteItem;

  newItem.appendChild(deleteBtn);

  
  input.value="";
  ul.appendChild(newItem);
}

function checkItem(){
  // console.log('checkItem');
  this.classList.toggle('checked');
}

function deleteItem(){
  // console.log('deleteItem');
  const item=this.parentElement;
  item.remove();
}

const addBtn=document.getElementById('add'); 
addBtn.addEventListener('click',addItem);

const form=document.getElementById('input-wrapper');
form.addEventListener('submit',function(event){event.preventDefault();})