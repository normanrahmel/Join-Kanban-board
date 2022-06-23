function creatHTMLshowHelp() {
    return /*html*/ `
    <!--Die Bilder dienen als Platzhalter-->
<!DOCTYPE html>
    <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="./js/include_html.js"></script>

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/help.css">

    <title>Help</title>
    <link rel="icon" href="./img/favicon.png" type="image/x-icon">
</head>

<body>

    <div class="mrg-lft">
        <div>
            <h1>Help</h1>
            <p class="help-text">Join is a Kanban board. <br> It gives you an overview of your current work situation and helps visualising the project flow in agile project management. </p>
            <div class="ci-border-dark p-2">
                This app was built as a training project at Developer Akademie. 
            </div>
            <div class="help-sections">
                <h4><b>Add a task</b></h4>
                <ul class="help-text">
                    <li>Create new tasks in the add-task section.</li>
                    <li>Fill the form and choose by whom the task should be processed.</li>
                    <li>You can create new categories for your individual purpose.</li>
                    <li>Decide whether the task should end up in the board for direct processing or in the backlog first.</li>
                </ul>
                <img class="help-img" src="img/Backlog.PNG" alt="Add task" title="Add task">
            </div>
            <div class="help-sections">
                <h4><b>The board</b></h4>
                <ul class="help-text">
                    <li>On the board each task passes through 4 stages.</li>
                    <li>The tasks can simply be moved by drag and drop.</li>
                    <li>On touch-screens, clicking on the swipe icon <img src="./img/swipe.png" class="trashbin"> moves the task to the next status. <br> From "DONE" it will be moved to "TODO" again in order to allow all possible status changes.</li>
                    <li>After a task has been completed, it can either be archived or deleted.</li>
                    <li>The color of the left border of each task illustrates its importance level.</li>
                    <li>By clicking on the task you can see and edit all details.</li>
                </ul>
                <img class="help-img" src="img/Backlog.PNG" alt="Board" title="Board">
            </div>
            <div class="help-sections">
                <h4><b>The backlog</b></h4>
                <ul class="help-text">
                    <li>The backlog is a collection of upcoming tasks and ideas that are not yet in the focus of the project team.</li>
                    <li>You can edit the task by clicking on it.</li>
                    <li>To move the task to the board click on the arrow icon.</li>
                </ul>
                <img class="help-img" src="img/Backlog.PNG" alt="Backlog" title="Backlog">
            </div>
            <div class="help-sections">
                <h4><b>The archive</b></h4>
                <ul class="help-text">
                    <li>The archive stores all tasks that have already been completed.</li>
                    <li>It can be used to figure out who has completed which task.</li>
                    <li>By clicking on the restore icon the task is moved back to the "DONE" section on the board.</li>
                    <li>Deleting a task from the archive cannot be undone.</li>
                </ul>
                <img class="help-img" src="img/Backlog.PNG" alt="Archive" title="Archive">
            </div>
            <div class="help-sections">
                <h4><b>The trash</b></h4>
                <ul class="help-text">
                    <li>All tasks that are deleted end up in the recycle bin.</li>
                    <li>It prevents tasks from being deleted accidentally.</li>
                    <li>Tasks that were deleted from the board can be restored to the "TODO" section of the board. <br> Tasks that were deleted from the backlog will be restored there.</li>
                    <li>Deleting from the recycle bin cannot be undone.</li>
                </ul>
                <img class="help-img" src="img/Backlog.PNG" alt="Trash" title="Trash">
            </div>
            <div class="help-sections">
                <h4><b>The Settings</b></h4>
                <ul class="help-text">
                    <li>Each task can be assigned to a limited number of team members.</li>
                    <li>We recommend to restrict this number to 1 or 2, in order to facilitate a clear structure of tasks and responsibilities. <br> Consider splitting tasks that seem to require more contributors. </li>
                </ul>
                <img class="help-img" src="img/Backlog.PNG" alt="Settings" title="Settings">
            </div>


        </div>
    </div>
</body>

</html>
    
    `;
}