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

                <!-- <div class="board-notecard">
                    <div class="board-notecard-date">Fertigstellung zum...</div>
                    <h3 class="ft-bld">Titel</h3>
                    <div class="board-notecard-discription">Beschreibung</div>
                    <div class="board-notecard-bottom">
                        <div>Category</div>
                        <div>Bild</div>
                    </div>

                </div> -->

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


function creatHTMLshowBacklog() {
    return /*html*/ `
        <div>
            Header
        </div>

        <div>
            <div>Employees</div>
            <div>Category</div>
            <div>title</div>
            <div>discription</div>
            <div>urgency</div>
            <div>date</div>
        </div>`
}


function creatHTMLshowAddTask() {
    return /*html*/ `
        <div>
            Header
        </div>

        <form class="form-example" onsubmit="addNote()"> 
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