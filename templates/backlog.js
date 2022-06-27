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
    
    <div class="backlog-card-items">
        <div>${task.title}</div>
        <div>${task.description}</div>
    </div>

    <div class="task-urgency">

    </div>

    
        
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
`
}