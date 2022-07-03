function creatHTMLshowBacklog() {
    return /*html*/ `
        <div id="backlogTable" class="backlog-right-side mrg-lft mrg-rgt">
            <div class="section-headline">
                <span class="section-headline-font">Backlog</span>
            </div>
            <div class="flex-center">
                <div class="backlog-header flex">
                    <div class="backlog-header-align card-widht-20"><h4>Assigned to</h4></div>
                    <div class="backlog-header-align card-widht-20"><h4>Category</h4></div>
                    <div class="backlog-header-align card-widht-45"><h4>Details</h4></div>
                    
                </div>
            </div>
        </div>`
}


function creatHTMLbacklogCard(task, number) {
    return /*html*/ `
<div class="backlog-card backlog-border">
    <div class="backlog-card-items card-widht-20">
        <div>${task.employees}</div>
        <div>${task.date}</div>
    </div>
    <div class="backlog-card-items card-widht-20">${task.category}</div>
    
    <div class="backlog-card-items card-widht-45">
        <div>${task.title}</div>
        <div>${task.description}</div>
    </div>

    <div id="taskUrgency${number}"
         class="task-urgency">
    </div>

    
        
    
    
</div>    
`
}