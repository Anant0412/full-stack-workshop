// lec -2 (task-2)

/*const addbutton=document.getElementById('add');
const del=document.getElementById('del');
const root=document.getElementById('root');
const taskname=document.getElementById('taskname');
const taskdesc=document.getElementById('task')

function createnote(name,desc){
    if(name!=" " && desc!=" ")
        {
            const newnote=document.createElement('div');
            newnote.innerText=`Name of task=${name} \n Description of task=${desc}`;
             newnote.
}

*/





document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        addTaskToList(taskValue);
        taskInput.value = ''; 
    } else {
        alert("Please enter a task.");
    }
});

function addTaskToList(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}