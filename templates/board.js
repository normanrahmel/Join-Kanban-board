function creatHTMLshowBoard() {
    return /*html*/ `
     <div class="section-headline mrg-headline">
            <span class="section-headline-font">Board</span>
         </div>
        <div class="board-right-side">
            <div class="board-section"
                 ondrop="moveTo('ToDo')" 
                 ondragover="allowDrop(event)">

                <h2>TO DO</h2>

                <div id="boardToDoContent"></div>

            </div>

            <div class="board-section"
                 ondrop="moveTo('InProgress')" 
                 ondragover="allowDrop(event)">

                <h2>IN PROGRESS</h2>

                <div id="boardInProgressContent"></div>
            </div>

            <div class="board-section"
                 ondrop="moveTo('Testing')" 
                 ondragover="allowDrop(event)">

                <h2>TESTING</h2>

                <div id="boardTestingContent"></div>
            
            </div>

            <div class="board-section"
                 ondrop="moveTo('Done')" 
                 ondragover="allowDrop(event)">

                <h2>DONE</h2>

                <div id="boardDoneContent"></div>

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

            <div class="task-description">
                <span>${task.description}</span>
            </div>
            
            <div class="board-notecard-bottom">
                <div id="taskUrgency${number}"
                    class="board-task-urgency">
                </div>

                <div class="notecard-Button flex">
                    <div class="card-menu-button" 
                         id="archiveButton" 
                         onclick="cardToArchive(${number}); 
                                  show(creatHTMLshowBoard()); 
                                  fillBoard()">

                       <img style="width:1.5rem; height: 1.5rem" src="img/archive.png" alt="">
                    </div>
                    <div class="card-menu-button" 
                         id="trashButton" 
                         onclick="cardToTrash(${number}); 
                                  show(creatHTMLshowBoard()); 
                                  fillBoard()">
                                  
                        <img style="width:1.5rem; height: 1.5rem" src="img/trash.png" alt="">
                    </div>
                </div>
            </div>

        </div>`
}