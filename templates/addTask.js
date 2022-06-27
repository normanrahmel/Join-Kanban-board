function creatHTMLshowAddTask() {
    return /*html*/ `
<div class="task-section">
    <div class="section-headline">
       <span class="section-headline-font">Add Task</span>
    </div>
    <div class="section-add-task">
        <div class="task-background">

            <form class="task-form" action="" onsubmit="addTask(); show(creatHTMLshowAddTask())">
                <!-- action="" method="get" -->

                <div class="form-field">
                    <label for="taskTitle">Title: </label>
                    <input class="task-input" type="text" id="taskTitle" placeholder="Title..."  required>
                </div>

                <div class="form-field-flex">
                    <div>
                    <label for="taskDate">Due Date: </label>
                    <input class="task-input" type="date" id="taskDate" style="width: 8.125rem" required>
                    </div>
                    <div class="">
                    <label for="taskUrgency">Urgency: </label>
                    <input class="task-input" type="number" min="1" max="3" size="3" id="taskUrgency" style="width: 2.5rem" required>
                    </div>
                </div>

                <div class="form-field">
                    <label for="taskCategory">Category: </label>
                    <input class="task-input" type="text" id="taskCategory" placeholder="Category..."  required>
                </div>

               

                <div class="form-field">
                    <label for="taskDescription">Description: </label>
                    <textarea class="task-input" type="text" id="taskDescription" placeholder="Description..." style="height: 6.25rem" required></textarea>
                </div>

                <div class="form-field">
                    <label for="taskEmployees">User: </label>
                    <input class="task-input" type="text" id="taskEmployees" placeholder="add User..." required>
                </div>
                <div class="task-button">
                    <button class="task-submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
 `;
}