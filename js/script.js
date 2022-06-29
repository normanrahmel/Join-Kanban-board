let tasks = [];

let users = [];


/**
 * runs the function downloadFromServer and loads user
 */
async function init() {
    await downloadFromServer();
    users = backend.getItem('users');
}


/**
 * checks the login and runs the function closeLogin if the input is correct
 */
function evaluationLogin(){
    eliminatFormLoop();
    let loginName = document.getElementById('lname').value;
    let loginPw = document.getElementById('lpw').value;

    for (let number = 0; number < users.length; number++) {
        const user = users[number];
        if(loginName == user.username ){
            if(loginPw == user.pw){
                closeLogin();
            } 
        }
    }
}


/**
 * eliminates the Loop on submit button
 */
function eliminatFormLoop(){
    var form = document.getElementById("sectionForm");

    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);
}


/**
 * deactivates LoginScreen and shows the Board
 */
async function closeLogin() {
    document.getElementById('loginScreen').classList.add('d-none');
    document.getElementById('rightSideComplete').classList.remove('d-none');
    document.getElementById('leftSideComplete').classList.remove('d-none');
}


/**
 * open the loginScreen and removes the input
 */
function logout(){
    document.getElementById('loginScreen').classList.remove('d-none');
    document.getElementById('rightSideComplete').classList.add('d-none');
    document.getElementById('leftSideComplete').classList.add('d-none');
    document.getElementById('lname').value = '';
    document.getElementById('lpw').value = '';
}


/**
 * Inits the Board and Renders the Tasks and Templates
 */
async function firstrender() {
    await init();
    await loadTasks();
    show(creatHTMLshowBoard());
    fillBoard();
}


/**
 * load the tasks from backend-JSON into the task-JSON
 */
async function loadTasks() {
    tasks = backend.getItem('tasks');
}


/**
 * Show / Rendering the complete Right Section
 * @param {var} section matching template
 */
function show(section) {
    document.getElementById('rightSideComplete').innerHTML = section;

}


/**
 * Shows the Navigation Button of Current Page
 * @param {var} number number of the position in the nav-bar
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
    // console.log(newTaskASJSON);
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
 * Save the Tasks to backend
 */
function saveTasks() {
    backend.setItem('tasks', tasks);
}


/**
 * Places Data von the Board to the correct Sections
 */
function fillBoard() {
    for (let number = tasks.length - 1; number > -1; number--) {
        let task = tasks[number];
        if (tasks[number].show == "ToDo") {
            fillBoardSingleTask(task, number, 'boardToDoContent');            
        }
        if (tasks[number].show == "InProgress") {
            fillBoardSingleTask(task, number, 'boardInProgressContent');
        }
        if (tasks[number].show == "Testing") {
            fillBoardSingleTask(task, number, 'boardTestingContent');
        }
        if (tasks[number].show == "Done") {
            fillBoardSingleTask(task, number, 'boardDoneContent');
        }
    }
}


/**
 * 
 * @param {*} task 
 * @param {*} number 
 * @param {*} idContent 
 */
function fillBoardSingleTask(task, number, idContent){
    document.getElementById(idContent).innerHTML +=
        creatHTMLsmallCard(task, number);
    document.getElementById(`taskUrgency${number}`).classList.add(`task-urgency-color-${task.urgency}`);
}


/**
 * Shows Tasks in Backlog as new created like a Historyboard
 */
function fillBacklog() {
    for (let number = tasks.length - 1; number > -1; number--) {
        const task = tasks[number];
        document.getElementById('backlogTable').innerHTML +=
            creatHTMLbacklogCard(task, number);
        document.getElementById(`taskUrgency${number}`).classList.add(`task-urgency-color-${task.urgency}`);
    }
}


/**
 * Shows Tasks in Archive
 */
function fillArchive() {
    for (let number = tasks.length - 1; number > -1; number--) {
        const task = tasks[number];
        if (task.show == "Archive") {
            document.getElementById('backlogTable').innerHTML +=
                creatHTMLArchiveCard(task, number);
            document.getElementById(`taskUrgency${number}`).classList.add(`task-urgency-color-${task.urgency}`);
        }
    }
}


/**
 * Shows Tasks in Trash
 */
function fillTrash(){
    for (let number = tasks.length - 1; number > -1; number--) {
        const task = tasks[number];
        if (task.show == "Trash") {
            document.getElementById('backlogTable').innerHTML +=
                creatHTMLTrashCard(task, number);
            document.getElementById(`taskUrgency${number}`).classList.add(`task-urgency-color-${task.urgency}`);
        }
    }
}


/**
 * 
 * @param {*} number 
 */
function cardToBoard(number){
    tasks[number].show = 'ToDo';
    saveTasks();
}


/**
 * 
 * @param {*} number 
 */
function cardToArchive(number){
    tasks[number].show = 'Archive';
    saveTasks();
}


/**
 * 
 * @param {*} number 
 */
function cardToTrash(number){
    // spliceTask = tasks.splice(number, 1);
    tasks[number].show = 'Trash';
    saveTasks();    
}


/**
 * 
 * @param {*} number 
 */
function finalyDelete(number){
    tasks.splice(number, 1);
}


// ----- Drag and Drop -----

let currentDraggedElement;


/**
 * 
 * @param {*} id 
 */
function startDragging(id) {
    currentDraggedElement = id;
}


/**
 * 
 * @param {*} ev 
 */
function allowDrop(ev) {
    ev.preventDefault();
}


/**
 * 
 * @param {*} showArea 
 */
function moveTo(showArea) {
    tasks[currentDraggedElement]['show'] = showArea;
    saveTasks();
    show(creatHTMLshowBoard());
    fillBoard();
}


// -------Section Trash-------
/**
 * 
 */
function changeTrashPicture() {
    document.getElementById('trash-button').src = 'img/trash-or.png';
}


// ----- backlog changing status -----
// let activeChangingStatusBar;

// function openStatusChange(number) {
//     document.getElementById(`status${number}`).classList.remove('d-none');
//     document.getElementById(`overlay`).classList.remove('d-none');
//     activeChangingStatusBar = `status${number}`;

// }

// function closeStatusChange() {
//     document.getElementById(activeChangingStatusBar).classList.add('d-none');
//     document.getElementById(`overlay`).classList.add('d-none');
// }

// function changingStatus(status, number) {
//     tasks[number].show = status;
//     saveTasks();
//     closeStatusChange();
//     show(creatHTMLshowBacklog());
//     fillBacklog();
// }


