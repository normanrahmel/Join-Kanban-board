function creatHTMLshowBoard() {
    return /*html*/ `
        <div class="board-right-side">
            <div class="board-section"
                 ondrop="moveTo('ToDo')" 
                 ondragover="allowDrop(event)">

                <h2>to do</h2>

                <div id="boardToDoContent"></div>

            </div>

            <div class="board-section"
                 ondrop="moveTo('InProgress')" 
                 ondragover="allowDrop(event)">

                <h2>in progress</h2>

                <div id="boardInProgressContent"></div>
            </div>

            <div class="board-section"
                 ondrop="moveTo('Testing')" 
                 ondragover="allowDrop(event)">

                <h2>testing</h2>

                <div id="boardTestingContent"></div>
            <!--Bitte Bezeichnung ändern und klassen Vernüftig benennen-->
            </div>

            <div class="board-section"
                 ondrop="moveTo('Done')" 
                 ondragover="allowDrop(event)">

                <h2>done</h2>

                <div id="boardToneContent"></div>

            </div>
        </div>`


}


function creatHTMLsmallCard(task, number) {
    return /*html*/ `
       <div class="board-notecard" draggable="true" ondragstart="startDragging(${number})">

<div class="board-notecard-date">
    <div> ${task.date}</div>
    <div>${task.category}</div>

    <div>${task.employees}</div>
</div>



<div class="board-notecard-description">
    <div class="section-title">
        ${task.title}
    </div>
    <div>
        <h5>${task.description}</h5>
    </div>
    <div class="board-notecard-bottom">
        
        <div class="notecard-Button flex">
            <div onclick="cardArchive()">
                <img style="width:1.5rem; height: 1.5rem" src="img/archive.png" alt="">
            </div>
            <div onclick="cardTrash()">
                <img style="width:1.5rem; height: 1.5rem" src="img/trash.png" alt="">
            </div>
        </div>
    </div>

</div>`
}


function creatHTMLshowBacklog() {
    return /*html*/ `
        <div id="backlogTable" class="backlog-right-side mrg-lft mrg-rgt">
            <div>
                <h2>Backlog</h2>
            </div>
            <div class="flex-center">
                <div class="backlog-header flex">
                    <div class="backlog-header-align"><h4>Assigned to</h4></div>
                    <div class="backlog-header-align"><h4>Category</h4></div>
                    <div class="backlog-header-align"><h4>Details</h4></div>
                </div>
            </div>
        </div>`
}


function creatHTMLbacklogCard(task, number) {
    return /*html*/ `
<div class="backlog-card backlog-border">
    <div class="backlog-card-items">
        <div>${task.employees}</div>
        <div>${task.date}</div>
    </div>
    <div class="backlog-card-items">${task.category}</div>
    <!--
    <div>
        <div>
            <span onclick="openStatusChange(${number})">
                <div style="text-decoration: underline;">${task.show}
                    <div id="status${number}" class="dropdown-content d-none">
                        <div onclick="changingStatus('ToDo', ${number})">ToDo</div>
                        <div onclick="changingStatus('InProgress', ${number})">In Progress</div>
                        <div onclick="changingStatus('Testing', ${number})">testing</div>
                        <div onclick="changingStatus('Done', ${number})">done</div>

                    </div>
                </div>
            </span>
        </div>
    </div>-->
    <div class="backlog-card-items">
        <div>${task.title}</div>
        <div>${task.description}</div>
    </div>
</div>    
`
}


function creatHTMLshowAddTask() {
    return /*html*/ `
    <div class="task-section">
        <div class="task-header ft-bld">
            Add Task
        </div>
    <div class="task-background">

        <form class="task-form" action="" onsubmit="addTask(); show(creatHTMLshowAddTask())">
            <!-- action="" method="get" -->

            <div class="form-field">
                <label for="taskTitle">Title: </label>
                <input class="task-input" type="text" id="taskTitle" placeholder="Title..." style="width: 250px" required>
            </div>

            <div class="form-field">
                <label for="taskDate">Due Date: </label>
                <input class="task-input" type="date" id="taskDate" style="width: 130px" required>
            </div>

            <div class="form-field">
                <label for="taskCategory">Category: </label>
                <input class="task-input" type="text" id="taskCategory" placeholder="Category..." style="width: 250px" required>
            </div>

            <div class="form-field">
                <label for="taskUrgency">Urgency: </label>
                <input class="task-input" type="number" min="1" max="3" size="3" id="taskUrgency" style="width: 40px" required>
            </div>

            <div class="form-field">
                <label for="taskDescription">Description: </label>
                <textarea class="task-input" type="text" id="taskDescription" placeholder="Description..." style="width: 250px; height: 100px" required></textarea>
            </div>

            <div class="form-field">
                <label for="taskEmployees">User: </label>
                <input class="task-input" type="text" id="taskEmployees" placeholder="add User..." required>
            </div>

            <button type="submit">Submit</button>

        </form>
    </div>
</div>`
}