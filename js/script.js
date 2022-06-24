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


function switchNavButton(number) {
    for (let sectionNumber = 1; sectionNumber < 10; sectionNumber++) {
        document.getElementById(`section${sectionNumber}`).classList.remove('active');
    }
    document.getElementById(`section${number}`).classList.add('active');
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
    for (let numer = 0; numer < tasks.length; numer++) {
        if (tasks[numer].show == "board-ToDo") {
            document.getElementById('boardToDoContent').innerHTML += 
                creatHTMLsmallCard(tasks[numer]);}
        if (tasks[numer].show == "board-InProgress") {
            document.getElementById('boardInProgressContent').innerHTML += 
                creatHTMLsmallCard(tasks[numer]);}
        if (tasks[numer].show == "board-Testing") {
            document.getElementById('boardTestingContent').innerHTML += 
                creatHTMLsmallCard(tasks[numer]);}
        if (tasks[numer].show == "board-Done") {
            document.getElementById('boardToneContent').innerHTML += 
                creatHTMLsmallCard(tasks[numer]);}
}}


