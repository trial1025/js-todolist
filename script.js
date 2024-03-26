function loadItems(){
  const items=JSON.parse(localStorage.getItem('items')) || [];
  const ul=document.getElementById('list');
  for (const item of items){
    const newItem=document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent=item.text;
    if (item.checked){
      newItem.classList.add('checked')
    }
    newItem.onclick=checkItem;

    const deleteBtn=document.createElement('span');
    deleteBtn.classList.add('delete');
    deleteBtn.onclick=deleteItem;

    newItem.appendChild(deleteBtn);
    ul.appendChild(newItem);
  }
}

function saveItems() {
  const ul = document.getElementById('list');
  const items = Array.from(ul.children).map(li => ({ text: li.textContent, checked: li.classList.contains('checked') }));
  localStorage.setItem('items', JSON.stringify(items));
}

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
  saveItems();
}

function checkItem(){
  // console.log('checkItem');
  this.classList.toggle('checked');
  saveItems();
}

function deleteItem(){
  // console.log('deleteItem');
  const item=this.parentElement;
  item.remove();
  saveItems();
}
loadItems();

const addBtn=document.getElementById('add'); 
addBtn.addEventListener('click',addItem);

const form=document.getElementById('input-wrapper');
form.addEventListener('submit',function(event){event.preventDefault();})