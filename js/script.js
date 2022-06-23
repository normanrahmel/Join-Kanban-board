let tasks = [];


async function firstrender() {
    // alert('Hi meine großartigen Teamkollegen');
    await loadTasks();
    show(creatHTMLshowBoard());
    fillBoard();
}


async function loadTasks() {
    let tasksJSONAsText = localStorage.getItem('tasksJSON');

    if (tasksJSONAsText) { //fängt Fehlermeldung ab, falls noch kein Array existiert
        tasks = JSON.parse(tasksJSONAsText);
    } else { // beim ersten Start wird ein Beispiel aus der JSON geladen 
        tasks = await loadTasksJSON_API();
    }
}


function show(section) {
    document.getElementById('rightSideComplete').innerHTML = section;

}


function switchNavButton() {
    let activeButton = document.getElementsByClassName('active');
    let disabledButton = document.getElementsByClassName('border-lft');
    if (condition) {

    } else {

    }





}

function addTask() {

    let newTaskASJSON = creatTaskJSON();

    console.log(newTaskASJSON);

    tasks.push(newTaskASJSON);
    saveTasks();
}


function creatTaskJSON() {
    let title = document.getElementById('taskTitle').value;
    let date = document.getElementById('taskDate').value;
    let category = document.getElementById('taskCategory').value;
    let urgency = document.getElementById('taskUrgency').value;
    let description = document.getElementById('taskDescription').value;
    let employees = document.getElementById('taskEmployees').value;
    let show = "backlog"

    return { urgency, date, title, description, category, employees, show };
}


function saveTasks() {
    let tasksJSONAsText = JSON.stringify(tasks);

    localStorage.setItem('tasksJSON', tasksJSONAsText);
}


async function loadTasksJSON_API() {
    let responseAsText = await fetch('./JSON/storage.json');
    return responseJSON = await responseAsText.json();
}


function fillBoard() {
    console.log('Test');

    for (let numer = 0; numer < tasks.length; numer++) {
        let task = tasks[numer];

        if (task.show == "board-ToDo") {
            document.getElementById('boardToDoContent').innerHTML += /*html*/ `
                <div class="board-notecard">
                    <div class="board-notecard-date">
                        ${task.date}</div>

                    <h3 class="ft-bld">${task.title}</h3>

                    <div class="board-notecard-discription">${task.discription}</div>

                    <div class="board-notecard-bottom">
                        <div>${task.category}</div>

                        <div>${task.employees}</div>
                    </div>

                </div>`
        }

    }
}