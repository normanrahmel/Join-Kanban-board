function creatHTMLshowTrash() {
    return /*html*/ `
        <div id="backlogTable" class="backlog-right-side mrg-lft mrg-rgt">
            <div>
                <h2>Trash</h2>
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
    <button onclick="finalyDelete(${number});
                     show(creatHTMLshowTrash()); 
                     fillTrash()">

                        finaly delete
    </button>

    <button onclick="cardToBoard(${number}); 
                     show(creatHTMLshowTrash()); 
                     fillTrash()">
                     
                        remove to board
    </button>
</div>    
`
}