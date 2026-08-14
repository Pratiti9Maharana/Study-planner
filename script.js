const subject = document.getElementById("subject");
const topic = document.getElementById("topic");
const date = document.getElementById("date");
const priority = document.getElementById("priority");

const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function(){
    const task = document.createElement("div");
    task.classList.add("task-card");

    task.innerHTML = `
    <h3>${subject.value}</h3>
    <p>Topic: ${topic.value}</p>
    <p>Date: ${date.value}</p>
    <p>Priority: ${priority.value}</p> 
    <button class="delete-btn">Delete</button>
    `;
    
    const deleteBtn = task.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function(){
        task.remove();
    });

    taskList.appendChild(task);
});