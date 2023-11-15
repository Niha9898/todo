//array to store the task
let Tasklist = [];

// function to save the task
function SaveTask() {
  // accessing the input values
  const TaskName = document.getElementById("inputVal").value;
  console.log(TaskName);
  if (TaskName.trim() !== "") {
    let Taskdata = {
      // to increase thelength of id value
      taskId: Tasklist.length + 1,
      taskname: TaskName,
    };
    Tasklist.push(Taskdata);
    // to make input field empty
    document.getElementById("inputVal").value = "";
    // calling the dynaic function
    DynamicRendering();
  }
}
// function to dynamic rendering of list
function DynamicRendering() {
    document.getElementById("listitem").innerHTML='';
  for (let i = 0; i < Tasklist.length; i++) {
    let dynamicli = document.createElement("li");
    dynamicli.classList.add("crud");
    // create paragraph element
    let mypara = document.createElement("p");
    mypara.innerHTML = Tasklist[i].taskname;
    // appending the mypara to dynamicli
    dynamicli.appendChild(mypara);
    // appending the dynamic list to the ul
    document.getElementById("listitem").appendChild(dynamicli);

    const Divele = document.createElement("div");
    Divele.classList.add("tasks");
    // craeting edit icon
    const EditIcon = document.createElement("i");
    EditIcon.classList.add("bi");
    EditIcon.classList.add("bi-pencil-square");

    // craeting delete icon
    const DeleteIcon = document.createElement("i");
    DeleteIcon.classList.add("bi");
    DeleteIcon.classList.add("bi-trash");

    // appending edit and del icons to divele
    Divele.appendChild(EditIcon);
    Divele.appendChild(DeleteIcon);
    // appending divele to dynamiclist
    dynamicli.appendChild(Divele);

// adding functionality to edit and del btn
    DeleteIcon.addEventListener('click',DeleteTask)
    DeleteIcon.taskId=Tasklist[i].taskId
    
    EditIcon.addEventListener('click',EditTask)
    EditIcon.taskId=Tasklist[i].taskId

  }
}
// function to delete the task
function DeleteTask(e) {
    // console.log(e)
    // console.log(e.target.taskId)
    index=Tasklist.findIndex((d)=>d.taskId==e.target.taskId)
    console.log(index)
    Tasklist.splice(index,1)
    DynamicRendering()
}
// function to edit
function EditTask(e) {
    console.log(e)
    console.log(e.target.taskId)
    edi=Tasklist.find((d)=>d.taskId==e.target.taskId)

    console.log(edi)
    document.getElementById('inputVal').value=edi.taskname
}
//function to remove all
function RemoveAll() {
    Tasklist.splice(0)
    DynamicRendering()

}
