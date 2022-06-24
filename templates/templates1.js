function creatHTMLshowBoard() {
    return /*html*/ `
        <div class="board-right-side">
            <div class="board-section">
                <h2>to do</h2>

                <div id="boardToDoContent"></div>

            </div>

            <div class="board-section">
                <h2>in progress</h2>

                <div id="boardInProgressContent"></div>
            </div>

            <div class="board-section">
                <h2>testing</h2>

                <div id="boardTestingContent"></div>

            </div>

            <div class="board-section">
                <h2>done</h2>

                <div id="boardToneContent"></div>

            </div>
        </div>`


}


function creatHTMLsmallCard(task) {
    return /*html*/ `
        <div class="board-notecard">
            <div class="board-notecard-date">
                ${task.date}</div>

            <h3 class="ft-bld">${task.title}</h3>

            <div class="board-notecard-description">${task.description}</div>

            <div class="board-notecard-bottom">
                <div>${task.category}</div>

                <div>${task.employees}</div>
            </div>

        </div>`
}


function creatHTMLshowBacklog() {
    return /*html*/ `
        <div id="backlogTable" class="backlog-right-side">
            <div>
                <h2>Backlog</h2>
            </div>
            <div class="flex-center">
                <div class="backlog-header txt-center flex">
                    <h3 class="w-20">Assigned to</h3>
                    <h3 class="w-10">Category</h3>
                    <h3 class="w-70">Details</h3>
                </div>
            </div>
        </div>`
}


function creatHTMLbacklogCard(task){
    return /*html*/`
    <div class="flex-center">
        <div class="backlog-card txt-center flex w-100 mrg-btm "  style="background-color: lightgray;">
            <div class="w-20">
                ${task.employees}
            </div>
            <div  class="w-10">
                ${task.category}
            </div>
            <div class="w-70">
                <h4>${task.title}</h4>
                <span>${task.description}</span>
                <div class="backlog-card-description-bottom">
                    <div>${task.urgency}</div> 
                    <div>${task.show}</div> 
                    <div>${task.date}</div> 
                </div>
            </div>
        </div>
    </div>`
}


function creatHTMLshowAddTask() {
    return /*html*/ `
        <div>
            Header
        </div>

        <form class="form-example" onsubmit="addTask()"> 
            <!-- action="" method="get" -->

            <div class="form-example">
              <label for="taskTitle">Title: </label>
              <input type="text" id="taskTitle" placeholder="..." required>
            </div>

            <div class="form-example">
              <label for="taskDate">Due Date: </label>
              <input type="date" id="taskDate" placeholder="..." required>
            </div>

            <div class="form-example">
                <label for="taskCategory">Category: </label>
                <input type="text" id="taskCategory" placeholder="..." required>
            </div>
            
            <div class="form-example">
                <label for="taskUrgency">Urgency: </label>
                <input type="number" min="1" max="3" id="taskUrgency" placeholder="1-3" required>
            </div>

            <div class="form-example">
                <label for="taskDescription">Description: </label>
                <input type="text" id="taskDescription" placeholder="..." required>
            </div>

            <div class="form-example">
                <label for="taskEmployees">Employees: </label>
                <input type="text" id="taskEmployees" placeholder="..." required>
            </div>

            <div class="form-example">
              <input type="submit" value="Subscribe!">
            </div>

          </form>
        `
}