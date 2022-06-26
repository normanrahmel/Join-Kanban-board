function creatHTMLbacklogCard(task, number) {
    return /*html*/ `
<div class="flex-center ">
    <!--backlog-card txt-center flex w-100 mrg-btm-->
    <div class="backlog-card flex mrg-btm">
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
                <!-- <div>${task.urgency}</div>  -->
                <div class="task-status"
                     onclick="openStatusChange(${number})">
                    Status: 
                        <div style="text-decoration: underline;">${task.show}

                            <div id="status${number}"
                                class="dropdown-content d-none">
                                <div onclick="changingStatus('ToDo', ${number})">ToDo</div>
                                <div onclick="changingStatus('InProgress', ${number})">In Progress</div>
                                <div onclick="changingStatus('Testing', ${number})">testing</div>
                                <div onclick="changingStatus('Done', ${number})">done</div>
                                
                            </div>
                        </div>
                </div> 

                <div>${task.date}</div> 
            </div>
        </div>
    </div>
</div>`
}