let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const subject = document.getElementById("subject");
const topic = document.getElementById("topic");
const date = document.getElementById("date");
const priority = document.getElementById("priority");

const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");


function updateProgress() {
    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(function(task) {
        return task.completed;
    }).length;

    let percentage = 0;

    if(totalTasks > 0) {
        percentage = Math.round((completedTasks / totalTasks) * 100);
    }

    const progress = document.getElementById("progress");
    const progressText = document.getElementById("progress-text");

    progress.style.width = percentage + "%";
    progressText.textContent = percentage + "% Completed";
}

function displayTask(taskData) {

    const task = document.createElement("div");

    task.classList.add("task-card");

    task.innerHTML = `
        <h3>${taskData.subject}</h3>
        <p>Topic: ${taskData.topic}</p>
        <p>Date: ${taskData.date}</p>
        <p>Priority: ${taskData.priority}</p>
        <button class="complete-btn">Completed</button>
        <button class="delete-btn">Delete</button>
    `;

    if (taskData.completed) {
        task.classList.add("completed");
    }

    const deleteBtn = task.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function() {
        task.remove();
        tasks = tasks.filter(function(item){
            return item != taskData;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
        updateProgress();
    });

    const completeBtn = task.querySelector(".complete-btn");

    completeBtn.addEventListener("click", function() {
        task.classList.toggle("completed");

        taskData.completed = task.classList.contains("completed");

        localStorage.setItem("tasks", JSON.stringify(tasks));
        updateProgress();
    });

    taskList.appendChild(task);
}


addTask.addEventListener("click", function() {

    const newTask = {
        subject: subject.value,
        topic: topic.value,
        date: date.value,
        priority: priority.value,
        completed: false
    };

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask(newTask);
    updateProgress();
});


tasks.forEach(function(savedTask) {
    displayTask(savedTask);
});
updateProgress();