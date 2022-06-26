let tasks = [];
let tasksArchive = [];
let tasksTrash = [];

/**
 * deactivates LoginScreen and shows the Board
 */
function initFirstrender() {
    document.getElementById('loginScreen').classList.add('d-none');
    document.getElementById('rightSideComplete').classList.remove('d-none');
    document.getElementById('leftSideComplete').classList.remove('d-none');

    // eliminates the Loop on submit button
    var form = document.getElementById("sectionForm");

    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);
}


/**
 * Inits the Board and Renders the Tasks and Templates
 */
async function firstrender() {
    // alert('Hi meine großartigen Teamkollegen');
    await loadTasks();
    show(creatHTMLshowBoard());
    fillBoard();
}

/**
 * Checks for Items in Array else fetching Data from API
 */
async function loadTasks() {
    let tasksJSONAsText = localStorage.getItem('tasksJSONactive');

    if (tasksJSONAsText) { //fängt Fehlermeldung ab, falls noch kein Array existiert
        tasks = JSON.parse(tasksJSONAsText);
    } else { // beim ersten Start wird ein Beispiel aus der JSON geladen 
        tasks = await loadTasksJSON_API();
    }
}

/**
 * Fetches Data from API
 * @returns responseJSON
 */
async function loadTasksJSON_API() {
    let responseAsText = await fetch('./JSON/storage.json');
    return responseJSON = await responseAsText.json();
}

/**
 * Show / Rendering the complete Right Section
 * @param {var} section 
 */
function show(section) {
    document.getElementById('rightSideComplete').innerHTML = section;

}

/**
 * Shows the Navigation Button of Current Page
 * @param {var} number 
 */
function switchNavButton(number) {
    for (let sectionNumber = 1; sectionNumber < 10; sectionNumber++) {
        document.getElementById(`section${sectionNumber}`).classList.remove('active');
    }
    document.getElementById(`section${number}`).classList.add('active');
}

/**
 * Adding new Tasks and push to JSON
 */
function addTask() {
    let newTaskASJSON = creatTaskJSON();
    console.log(newTaskASJSON);
    tasks.push(newTaskASJSON);
    saveTasks();
}

/**
 * Pushes all Values from created Tasks into JSON
 * @returns all relevant data for the JSON. The individual Arrays in JSON
 */
function creatTaskJSON() {
    let title = document.getElementById('taskTitle').value;
    let date = document.getElementById('taskDate').value;
    let category = document.getElementById('taskCategory').value;
    let urgency = document.getElementById('taskUrgency').value;
    let description = document.getElementById('taskDescription').value;
    let employees = document.getElementById('taskEmployees').value;
    let show = "ToDo";

    return { urgency, date, title, description, category, employees, show };
}

/**
 * Save the Tasks to Storage
 * MOMENTAN NOCH LOCAL STATT BACKEND! --- TODO
 */
function saveTasks() {
    let tasksJSONAsText = JSON.stringify(tasks);
    localStorage.setItem('tasksJSONactive', tasksJSONAsText);
}

/**
 * Places Data von the Board to the correct Sections
 */
function fillBoard() {
    for (let number = 0; number < tasks.length; number++) {
        if (tasks[number].show == "ToDo") {
            document.getElementById('boardToDoContent').innerHTML +=
                creatHTMLsmallCard(tasks[number], number);
        }
        if (tasks[number].show == "InProgress") {
            document.getElementById('boardInProgressContent').innerHTML +=
                creatHTMLsmallCard(tasks[number], number);
        }
        if (tasks[number].show == "Testing") {
            document.getElementById('boardTestingContent').innerHTML +=
                creatHTMLsmallCard(tasks[number], number);
        }
        if (tasks[number].show == "Done") {
            document.getElementById('boardToneContent').innerHTML +=
                creatHTMLsmallCard(tasks[number], number);
        }
    }
}

/**
 * Shows Tasks in Backlog as new created like a Historyboard
 */
function fillBacklog() {
    for (let number = tasks.length - 1; number > -1; number--) {
        const task = tasks[number];
        document.getElementById('backlogTable').innerHTML +=
            creatHTMLbacklogCard(task, number);
    }
}

// ----- Drag and Drop -----

let currentDraggedElement;

function startDragging(id) {
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(showArea) {
    tasks[currentDraggedElement]['show'] = showArea;
    saveTasks();
    show(creatHTMLshowBoard());
    fillBoard();
}

// ----- backlog changing status -----
let activeChangingStatusBar;

function openStatusChange(number) {
    document.getElementById(`status${number}`).classList.remove('d-none');
    document.getElementById(`overlay`).classList.remove('d-none');
    activeChangingStatusBar = `status${number}`;

}

function closeStatusChange() {
    document.getElementById(activeChangingStatusBar).classList.add('d-none');
    document.getElementById(`overlay`).classList.add('d-none');
}

function changingStatus(status, number) {
    tasks[number].show = status;
    saveTasks();
    closeStatusChange();
    show(creatHTMLshowBacklog());
    fillBacklog();
}

// -------Section Trash-------