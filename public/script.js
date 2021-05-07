const inputText=document.getElementById('inputText');
const addBtn=document.getElementById('addBtn');
const list=document.getElementById('list');

var todoArr=[];
display();
addBtn.onclick=()=>{
    let textEntered=inputText.value;
    if(textEntered.length>0){ 
        let newItem={content:textEntered,status:'processing'}; 
    todoArr.push(newItem);
   }
   display();
}
function display(){
 
    let listItem='';
    let newLi='';
    for(let i=0;i<todoArr.length;i++){
       
        if(todoArr[i].status=='processing'){
            newLi=`<li><span class='element'>${todoArr[i].content}</span>
            <span class='icons'>
                <i style='font-size:24px;color:green;' class='far fa-check-square' onclick="completeWork(${i})"></i>
                <i style='font-size:24px;' class='fas fa-trash' onclick="deleteItem(${i})"></i>
            </span>
             </li>`;
        }else{
            newLi=`<li><span class='element completed'>${todoArr[i].content}</span>
            <span class='icons'>
                <i style='font-size:24px;color:green;' class='far fa-check-square' onclick="completeWork(${i})"></i>
                <i style='font-size:24px;' class='fas fa-trash' onclick="deleteItem(${i})"></i>
            </span>
            </li>`;
        }
        listItem += newLi;
    }
    list.innerHTML=listItem;
    inputText.value='';
}
function deleteItem(index){
    todoArr.splice(index,1);
    display();
}
function completeWork(index){
    todoArr[index].status='done';
    display();
}

 



