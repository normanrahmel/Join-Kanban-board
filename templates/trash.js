function creatHTMLshowTrash() {
    return /*html*/ `
        <div id="backlogTable" class="backlog-right-side">
        <div class="section-headline">
       <span class="section-headline-font">Trash</span>
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


function creatHTMLTrashCard(task, number) {
    return /*html*/ `
<div class="backlog-card backlog-border">
    <div class="backlog-card-items">
        <div>${task.employees}</div>
        <div>${task.date}</div>
    </div>
    <div class="backlog-card-items">${task.category}</div>
    
    <div class="backlog-card-items">
        <div>${task.title}</div>
        <div>${task.description}</div>
    </div>

    <div id="taskUrgency${number}"
         class="task-urgency">
    </div>
    <div class="big-card-spacer">
    <div class="big-card-buttons">
        <div class="big-card-menu-button">
            <img src="img/removeTrashGray.png" 
                 alt="remove to board"
                 title="remove to board"
                 style="width:1.5rem; height: 1.5rem"
                 onclick="  cardToBoard(${number}); 
                            show(creatHTMLshowTrash()); 
                            fillTrash()">
        </div>
    
        <div class="big-card-menu-button">
            <img src="img/finalytrashGray.png" 
                 alt="delete finaly"
                 title="delete finaly"
                 style="width:1.5rem; height: 1.5rem"
                 onclick="  finalyDelete(${number});
                            show(creatHTMLshowTrash()); 
                            fillTrash()">
        </div>
</div>
    </div>
   
</div>`
}