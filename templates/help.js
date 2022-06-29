function creatHTMLshowHelp() {
    return /*html*/ `
<html lang="en">
<body>
    <div class="section-privacy section-help">
        <div>
        <div class="section-headline">
            <span class="section-headline-font">Help</span>
         </div>
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
                <img class="help-img" src="img/addtask-help.png" alt="Add task" title="Add task">
            </div>
            <div class="help-sections">
                <h4><b>The board</b></h4>
                <ul class="help-text">
                    <li>On the board each task passes through 4 stages.</li>
                    <li>The tasks can simply be moved by drag and drop.</li>
                    <li>After a task has been completed, it can either be archived or deleted.</li>
                    <li>The color of the left border of each task illustrates its importance level.</li>
                    <li>By clicking on the task you can see and edit all details.</li>
                </ul>
                <img class="help-img" src="img/board__help.png" alt="Board" title="Board">
            </div>
            <div class="help-sections">
                <h4><b>The backlog</b></h4>
                <ul class="help-text">
                    <li>The backlog is a collection of upcoming tasks and ideas that are not yet in the focus of the project team.</li>
                    <li>You can edit the task by clicking on it.</li>
                    <li>To move the task to the board click on the arrow icon.</li>
                </ul>
                <img class="help-img" src="img/backlog__help.png" alt="Backlog" title="Backlog">
            </div>
            <div class="help-sections">
                <h4><b>The archive</b></h4>
                <ul class="help-text">
                    <li>The archive stores all tasks that have already been completed.</li>
                    <li>It can be used to figure out who has completed which task.</li>
                    <li>By clicking on the restore icon the task is moved back to the "DONE" section on the board.</li>
                    <li>Deleting a task from the archive cannot be undone.</li>
                </ul>
                <img class="help-img" src="img/archiv-help.png" alt="Archive" title="Archive">
            </div>
            <div class="help-sections">
                <h4><b>The trash</b></h4>
                <ul class="help-text">
                    <li>All tasks that are deleted end up in the recycle bin.</li>
                    <li>It prevents tasks from being deleted accidentally.</li>
                    <li>Tasks that were deleted from the board can be restored to the "TODO" section of the board. <br> Tasks that were deleted from the backlog will be restored there.</li>
                    <li>Deleting from the recycle bin cannot be undone.</li>
                </ul>
                <img class="help-img" src="img/trash-help.png" alt="Trash" title="Trash">
            </div>
        </div>
    </div>
</body>
</html>
    `;
}