var form=document.getElementById('addForm');
var item= document.getElementById('items');
var filter= document.getElementById('filter');


//form submission

form.addEventListener('submit', AddItem);

item.addEventListener('click',DeleteItem);

filter.addEventListener('keyup',FilterItem);

function AddItem(e){
    e.preventDefault();
    
    var text=document.getElementById('item').value;
    var li= document.createElement('li');
// console.log()
    li.className="list-group-item";
    li.appendChild(document.createTextNode(text));

    item.appendChild(li)

    var delBtn= document.createElement('button');
    delBtn.className='btn btn-danger btn-sm float-right delete';

    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn)

    
}
function DeleteItem(e){
e.preventDefault();
if(e.target.classList.contains('delete')){
    if(confirm("are you sure to delete ? ")){
        var li= e.target.parentElement;
        item.removeChild(li);
    }
}


}
function FilterItem(e){
    var text= e.target.value.toLowerCase();
    
    var items= document.getElementsByTagName('li');
        Array.from(items).forEach(function(item){
            var itemName= item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(text) != -1){
                item.style.display='block';
            }
            else{
                item.style.display="none";
            }
        });


}