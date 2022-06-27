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
    
    <div>
        ${task.show}
        <!-- <div>
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
        </div> -->
    </div>
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
            <div class="task-button">
                <button class="lsubmit" type="submit">Submit</button>
            </div>
        </form>
    </div>
</div>`
}