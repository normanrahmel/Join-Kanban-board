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
        <div class="backlog-right-side">
            <div>
                <h2>Backlog</h2>
            </div>

            <div>

                <!-- <div>discription</div>
                <div>urgency</div>
                <div>date</div> -->
            </div>
            <table>
                <tbody id="backlogTable">
                    <tr>
                        <th class="t-column-assigned-to">
                            Assigned to
                        </th>
                        <th class="t-column-category">
                            Category
                        </th>
                        <th class="t-column-details">
                            Details
                        </th>
                    </tr>

                    
                </tbody>
            </table>
        </div>`
}


function creatHTMLbacklogCard(task){
    return /*html*/`
        <tr>
            <td>
                ${task.employees}
            </td>
            <td>
                ${task.category}
            </td>
            <td>
                <h4>${task.title}</h3>
                <span>${task.description}</span>
                <div>
                    ${task.urgency}
                    ${task.show}
                    ${task.date}
                </div>
                    
            </td>
        </tr>`
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